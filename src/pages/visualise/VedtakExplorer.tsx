import "./VedtakExplorer.css";

import { Heading, Loader, Search, Switch, Tabs } from "@navikt/ds-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import mermaid from "mermaid";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import svgPanZoom from "svg-pan-zoom";

import { Grunnlagstype, TreeChild, TreeChildTypeEnum } from "../../api/BidragBehandlingApiV1";
import { EChartsOption, ReactECharts } from "../../components/e-charts/ReactECharts";
import { BEHANDLING_API_V1, BIDRAG_VEDTAK_API } from "../../constants/api";
import PageWrapper from "../PageWrapper";
import missingImg from "./missing.jpeg";
mermaid.initialize({
    startOnLoad: true,
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis", nodeSpacing: 5 },
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
            <Suspense
                fallback={
                    <div className="flex justify-center">
                        <Loader size="3xlarge" title="venter..." variant="interaction" />
                    </div>
                }
            >
                <Tabs.Panel value={"flowchart"}>
                    {state == "flowchart" && <VedtakMermaidFlowChart behandlingId={behandlingId} vedtakId={vedtakId} />}
                </Tabs.Panel>
                <Tabs.Panel value={"treegraph"}>
                    <VedtakTreeGraph behandlingId={behandlingId} vedtakId={vedtakId} />
                </Tabs.Panel>
            </Suspense>
        </Tabs>
    );
}

function VedtakMermaidFlowChart({ behandlingId, vedtakId }: VedtakExplorerGraphProps) {
    const { data } = useSuspenseQuery({
        queryKey: ["mermaid", behandlingId, vedtakId],
        queryFn: () => {
            console.log(behandlingId, vedtakId);
            if (behandlingId) {
                return BEHANDLING_API_V1.api.vedtakTilMermaid(Number(behandlingId));
            }
            return BIDRAG_VEDTAK_API.vedtak.vedtakTilMermaid(Number(vedtakId));
        },
        select: (data) => data.data,
    });

    const divRef = useRef<HTMLDivElement>();
    useEffect(() => {
        mermaid
            .render("mermaidSvg", data, divRef.current)
            .then((res) => {
                divRef.current.innerHTML = res.svg;
                console.log(res.bindFunctions);
                svgPanZoom("#mermaidSvg");
                if (res.bindFunctions) {
                    res.bindFunctions(divRef.current);
                }
            })
            .catch((e) => console.error(e));
    }, [data]);
    return <div ref={divRef} className="mermaid h-full" />;
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
        },
        roam: true,
        legend: {
            top: "2%",
            left: "3%",
            orient: "vertical",
            data: [
                {
                    name: "Vedtak",
                    icon: "rectangle",
                },
            ],
            borderColor: "#c23531",
        },
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
            position: () => {
                if (tree.grunnlagstype == Grunnlagstype.NOTAT) {
                    return "bottom";
                }
                return "right";
            },
            formatter: (v) => {
                return `<strong>${v.name}</strong>:
                <br/>
                gjelder: ${tree.grunnlag?.gjelderReferanse}
                <br/><br/>
                <pre>${v.value.replaceAll("\\n", "\n")}</pre>`;
            },
        },
        collapsed: tree.type == TreeChildTypeEnum.GRUNNLAG,
        children: tree.children.map(toEchartData),
    };
}
