import { Loader } from "@navikt/ds-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";

import { Grunnlagstype, TreeChild, TreeChildTypeEnum } from "../../api/BidragBehandlingApiV1";
import { EChartsOption, ReactECharts } from "../../components/e-charts/ReactECharts";
import { BEHANDLING_API_V1 } from "../../constants/api";

export default ({ behandlingId }: { behandlingId: number }) => {
    return (
        <div className="">
            <Suspense
                fallback={
                    <div className="flex justify-center">
                        <Loader size="3xlarge" title="venter..." variant="interaction" />
                    </div>
                }
            >
                <RenderGraph behandlingId={behandlingId} />
            </Suspense>
        </div>
    );
};

function RenderGraph({ behandlingId }: { behandlingId: number }) {
    const { data } = useSuspenseQuery({
        queryKey: ["graph", behandlingId.toString()],
        queryFn: () => {
            return BEHANDLING_API_V1.api.vedtakTilTre(behandlingId);
        },
        select: (data) => data.data,
    });
    console.log(data, toEchartData(data));
    return <ReactECharts option={toEchart(data)} style={{ height: "100%", overflow: "auto", margin: "auto" }} />;
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
                right: "10%",
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
        value: tree.grunnlag?.innhold
            ? JSON.stringify(tree.grunnlag?.innhold, null, 2)
            : tree.periode
              ? JSON.stringify(tree.periode, null, 2)
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
                <pre>${v.value}</pre>`;
            },
        },
        collapsed: tree.type == TreeChildTypeEnum.GRUNNLAG,
        children: tree.children.map(toEchartData),
    };
}
