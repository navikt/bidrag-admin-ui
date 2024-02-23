import "./VedtakExplorer.css";

import { Alert, Heading, Loader, Modal, Search, Switch, Tabs } from "@navikt/ds-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import mermaid from "mermaid";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { useSearchParams } from "react-router-dom";
import svgPanZoom from "svg-pan-zoom";

import { Grunnlagstype, TreeChild, TreeChildTypeEnum } from "../../api/BidragBehandlingApiV1";
import { EChartsOption, ReactECharts } from "../../components/e-charts/ReactECharts";
import { BEHANDLING_API_V1, BIDRAG_VEDTAK_API } from "../../constants/api";
import PageWrapper from "../PageWrapper";
import missingImg from "./missing.jpeg";
mermaid.initialize({
    startOnLoad: true,
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
    securityLevel: "loose",
});

interface VedtakExplorerGraphProps {
    behandlingId?: string;
    vedtakId?: string;
}

export default () => {
    return (
        <PageWrapper name="">
            <VedtakExplorer />
        </PageWrapper>
    );
};

const existingSearchParams = () => paramsToObject(new URLSearchParams(window.location.search));
function paramsToObject(entries) {
    const result = {};
    for (const [key, value] of entries) {
        // each 'entry' is a [key, value] tupple
        result[key] = value;
    }
    return result;
}
function VedtakExplorer() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [id, setId] = useState<string | undefined>(searchParams.get("id"));
    const [isBehandlingId, setIsBehandlingId] = useState<boolean>(
        searchParams.get("erBehandlingId") == "true" ? true : false
    );

    const onSearch = (id: string) => {
        setSearchParams({ ...existingSearchParams(), id });
        setId(id);
    };

    return (
        <div className="p-2">
            <Heading size="medium">Vedtak explorer</Heading>
            <div className="max-w-96 flex flex-col gap-[2px]">
                <Search
                    size="small"
                    hideLabel={true}
                    label="Visualiser behandling"
                    variant="primary"
                    defaultValue={id}
                    onSearchClick={onSearch}
                ></Search>
                <Switch
                    checked={isBehandlingId}
                    size="small"
                    onChange={(e) => {
                        const isChecked = e.target.checked;
                        setSearchParams({ ...existingSearchParams(), erBehandlingId: isChecked ? "true" : "false" });
                        setIsBehandlingId(e.target.checked);
                    }}
                >
                    Er behandlingsid
                </Switch>
            </div>
            <div className="border-2 border-solid">
                <VisualiserVedtakGraph
                    behandlingId={isBehandlingId ? id : null}
                    vedtakId={isBehandlingId ? null : id}
                />
            </div>
        </div>
    );
}

function VisualiserVedtakGraph({ behandlingId, vedtakId }: VedtakExplorerGraphProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    type GrafType = "treegraph" | "flowchart";
    const [state, setState] = useState<GrafType>(
        searchParams.get("graftype") == "treegraph" ? "treegraph" : "flowchart"
    );

    if (behandlingId == null && vedtakId == null) {
        return (
            <div>
                Søk etter vedtaksid som du vil visualisere
                <img src={missingImg}></img>
            </div>
        );
    }
    return (
        <Tabs
            value={state}
            onChange={(value) => {
                setSearchParams({ ...existingSearchParams(), graftype: value });
                setState(value as GrafType);
            }}
            size="small"
        >
            <Tabs.List>
                <Tabs.Tab label="Flowchart" value="flowchart" />
                <Tabs.Tab label="Tregraph" value="treegraph" />
            </Tabs.List>
            <ErrorBoundary
                fallbackRender={(props: FallbackProps) => {
                    return (
                        <Alert size="small" variant="error">
                            Kunne ikke hente {behandlingId ? "behandling" : "vedtak"} med id {behandlingId ?? vedtakId}:{" "}
                            {props.error.message}
                        </Alert>
                    );
                }}
            >
                <Suspense
                    fallback={
                        <div className="flex justify-center">
                            <Loader size="3xlarge" title="venter..." variant="interaction" />
                        </div>
                    }
                >
                    <Tabs.Panel value={"flowchart"}>
                        {state == "flowchart" && (
                            <VedtakMermaidFlowChart behandlingId={behandlingId} vedtakId={vedtakId} />
                        )}
                    </Tabs.Panel>
                    <Tabs.Panel value={"treegraph"}>
                        <VedtakTreeGraph behandlingId={behandlingId} vedtakId={vedtakId} />
                    </Tabs.Panel>
                </Suspense>
            </ErrorBoundary>
        </Tabs>
    );
}

interface VedtakDetaljer {
    tittel: string;
    innhold: Object;
    type?: string;
    gjelderReferanse?: string;
}
function VedtakMermaidFlowChart({ behandlingId, vedtakId }: VedtakExplorerGraphProps) {
    const { data } = useSuspenseQuery({
        queryKey: ["mermaid", behandlingId, vedtakId],
        queryFn: () => {
            if (behandlingId) {
                // Used for debugging. Only used to check network log
                BEHANDLING_API_V1.api.vedtakTilMermaidText(Number(behandlingId));
                return BEHANDLING_API_V1.api.vedtakTilMermaid(Number(behandlingId));
            }
            BIDRAG_VEDTAK_API.vedtak.vedtakTilMermaidText(Number(behandlingId));
            return BIDRAG_VEDTAK_API.vedtak.vedtakTilMermaid(Number(vedtakId));
        },
        select: (data) => data.data,
    });

    const isRendering = useRef(false);
    const [showDetails, setShowDetails] = useState<VedtakDetaljer | null>(null);
    const divRef = useRef<HTMLDivElement>();
    useEffect(() => {
        window.callback = (id) => {
            console.log("CALLBACK", id);
            setShowDetails(getDetailsById(id));
        };
    }, []);

    function getDetailsById(id: string): VedtakDetaljer {
        const grunnlag = data.grunnlagListe.find((d) => d.referanse == id);
        if (grunnlag)
            return {
                tittel: grunnlag.referanse,
                innhold: grunnlag.innhold,
                gjelderReferanse: grunnlag.gjelderReferanse,
                type: grunnlag.type,
            };
        if (data.vedtak.nodeId == id)
            return {
                tittel: data.vedtak.nodeId,
                innhold: data.vedtak,
            };
        const stønadsendring = data.stønadsendringer.find((d) => d.nodeId == id);
        if (stønadsendring)
            return {
                tittel: stønadsendring.nodeId,
                innhold: stønadsendring,
            };

        const periode = data.perioder.find((d) => d.nodeId == id);
        if (periode)
            return {
                tittel: periode.nodeId,
                innhold: periode,
            };
    }
    useEffect(() => {
        console.log("RENDER");
        if (isRendering.current) return;
        isRendering.current = true;
        mermaid
            .render("mermaidSvg", data.mermaidGraph, divRef.current)
            .then((res) => {
                divRef.current.innerHTML = res.svg;
                if (res.bindFunctions) {
                    res.bindFunctions(divRef.current.firstElementChild);
                }
                svgPanZoom("#mermaidSvg");
                isRendering.current = false;
            })
            .catch((e) => console.error("HERE", e));
    }, [data]);
    return (
        <>
            {/* {<Popover open={openState} onClose={() => setOpenState(false)} anchorEl={buttonRef.current}>
                <Popover.Content>Innhold her!</Popover.Content>
            </Popover>} */}
            <Modal
                style={{ maxHeight: "1000px", maxWidth: "max-content" }}
                open={showDetails != null}
                header={{ heading: showDetails?.tittel, size: "medium", closeButton: false }}
                closeOnBackdropClick
                onClose={() => setShowDetails(null)}
            >
                <Modal.Body>
                    {showDetails?.type && (
                        <dl>
                            <dt>Gjelder</dt>
                            <dd>{showDetails?.gjelderReferanse}</dd>
                            <dt>Grunnlagstype</dt>
                            <dd>{showDetails?.type}</dd>
                        </dl>
                    )}
                    <pre style={{ maxHeight: "800px", overflow: "auto" }}>
                        {JSON.stringify(showDetails?.innhold, null, 2)}
                    </pre>
                </Modal.Body>
            </Modal>
            <div ref={divRef} className="mermaid h-full" />
        </>
    );
}

function VedtakTreeGraph({ behandlingId, vedtakId }: VedtakExplorerGraphProps) {
    const { data } = useSuspenseQuery({
        queryKey: ["graph", behandlingId, vedtakId],
        queryFn: () => {
            if (behandlingId != null) {
                return BEHANDLING_API_V1.api.vedtakTilTre(Number(behandlingId));
            }
            return BIDRAG_VEDTAK_API.vedtak.vedtakTilTre(Number(vedtakId));
        },
        select: (data) => data.data,
    });
    return <ReactECharts option={toEchart(data)} style={{ height: "calc(100% - 200px)", margin: "auto" }} />;
}

function toEchart(tree: TreeChild): EChartsOption {
    return {
        tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
            enterable: true,
            hideDelay: 500,
            extraCssText: "max-height: 800px; max-width: 1000px; overflow: auto;",
            position: function (pos, params, dom, rect, size) {
                // tooltip will be fixed on the right if mouse hovering on the left,
                // and on the left if hovering on the right.
                const obj = { ...pos, top: 40 };
                // obj[["left", "right"][+(pos[0] > size.viewSize[0] / 2)]] = 50;
                return obj;
            },
        },
        roam: true,
        series: [
            {
                type: "tree",
                roam: true,
                layout: "orthogonal",
                initialTreeDepth: 4,
                name: "Vedtak",
                data: [toEchartData(tree)],
                top: "1%",
                left: "10%",
                bottom: "1%",
                right: "30%",
                symbolSize: 7,
                label: {
                    position: "left",
                    verticalAlign: "middle",
                    align: "right",
                },
                leaves: {
                    label: {
                        position: "right",
                        verticalAlign: "middle",
                        align: "left",
                    },
                },
                emphasis: {
                    focus: "descendant",
                },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
            },
        ],
    };
}
function toEchartData(tree: TreeChild) {
    const getColor = () => {
        switch (tree.grunnlagstype) {
            case Grunnlagstype.VIRKNINGSTIDSPUNKT:
            case Grunnlagstype.SOKNAD:
            case Grunnlagstype.NOTAT:
                return "#c2c4c3";
            default:
                return null;
        }
    };
    const getWidth = () => {
        switch (tree.grunnlagstype) {
            case Grunnlagstype.VIRKNINGSTIDSPUNKT:
            case Grunnlagstype.SOKNAD:
            case Grunnlagstype.NOTAT:
                return 0.5;
            default:
                return 1.5;
        }
    };
    const getBordertype = () => {
        switch (tree.grunnlagstype) {
            case Grunnlagstype.VIRKNINGSTIDSPUNKT:
            case Grunnlagstype.SOKNAD:
            case Grunnlagstype.NOTAT:
                return "dashed";
            default:
                return "solid";
        }
    };
    return {
        name: tree.name,
        value: tree.grunnlag
            ? JSON.stringify(tree?.grunnlag?.innhold, null, 2)
            : tree?.innhold
              ? JSON.stringify(tree?.innhold, null, 2)
              : "",
        itemStyle: {
            borderType: getBordertype(),
        },
        lineStyle: {
            color: getColor(),
            width: getWidth(),
        },

        tooltip: {
            formatter: (v) => {
                return `
                <strong style="font-size: 18px">${v.name}</strong>:
                <br/>
                ${
                    tree.grunnlag
                        ? `
                        <dl>
                            <dt>Gjelder</dt>
                            <dd>${tree.grunnlag?.gjelderReferanse}</dd>
                            <dt>Grunnlagstype</dt>
                            <dd>${tree.grunnlag?.type}</dd>
                        </dl>
                <br/>`
                        : ""
                }
                <pre>${v.value.replaceAll("\\n", "\n")}</pre>`;
            },
        },
        collapsed: tree.type == TreeChildTypeEnum.GRUNNLAG,
        children: tree.children.map(toEchartData),
    };
}
