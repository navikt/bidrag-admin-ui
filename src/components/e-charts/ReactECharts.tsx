import type { LineSeriesOption, TreemapSeriesOption, TreeSeriesOption } from "echarts/charts";
import { LineChart, TreeChart } from "echarts/charts";
import type { GridComponentOption, TitleComponentOption, TooltipComponentOption } from "echarts/components";
import {
    DataZoomComponent,
    DataZoomInsideComponent,
    DataZoomSliderComponent,
    GridComponent,
    LegendComponent,
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
} from "echarts/components";
import type { ComposeOption, ECharts, SetOptionOpts } from "echarts/core";
import { getInstanceByDom, init, use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { InsideDataZoomOption, SliderDataZoomOption } from "echarts/types/dist/shared";
import { CSSProperties, useEffect, useRef, useState } from "react";

use([
    LegendComponent,
    LineChart,
    GridComponent,
    TooltipComponent,
    TitleComponent,
    ToolboxComponent,
    DataZoomComponent,
    CanvasRenderer,
    TreeChart,
    DataZoomInsideComponent,
    DataZoomSliderComponent,
]);

export type EChartsOption = ComposeOption<
    | LineSeriesOption
    | TitleComponentOption
    | GridComponentOption
    | InsideDataZoomOption
    | SliderDataZoomOption
    | TooltipComponentOption
    | TreemapSeriesOption
    | TreeSeriesOption
>;

export interface ReactEChartsProps {
    option: EChartsOption;
    style?: CSSProperties;
    settings?: SetOptionOpts;
}

let currentIndex = -1;
export function ReactECharts({ option, style, settings }: ReactEChartsProps): JSX.Element {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartInitialized, setChartInitialized] = useState(false);

    useEffect(() => {
        let chart: ECharts | undefined;
        if (chartRef.current !== null) {
            chart = init(chartRef.current);
            setChartInitialized(true);
        }

        function resizeChart() {
            chart?.resize();
        }
        window.addEventListener("resize", resizeChart);

        return () => {
            chart?.dispose();
            window.removeEventListener("resize", resizeChart);
        };
    }, []);

    useEffect(() => {
        const canvas = chartRef.current.querySelector("canvas");
        const chart = getInstanceByDom(chartRef.current);
        const dataLen = option.series[0].data.length;

        const handleKeydown = (e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                chart.dispatchAction({
                    type: "downplay",
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                });
                currentIndex =
                    e.key === "ArrowRight"
                        ? (currentIndex + 1) % dataLen
                        : currentIndex <= 0
                          ? dataLen - 1
                          : currentIndex - 1;
                chart.dispatchAction({
                    type: "highlight",
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                });
                chart.dispatchAction({
                    type: "showTip",
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                });
            }
        };
        const addKeydownListener = () => window.addEventListener("keydown", handleKeydown);
        const removeKeydownListener = () => window.removeEventListener("keydown", handleKeydown);
        canvas?.setAttribute("tabindex", "0");
        canvas?.addEventListener("focusin", addKeydownListener);
        canvas?.addEventListener("focusout", removeKeydownListener);
        return () => {
            window.removeEventListener("keydown", handleKeydown);
            canvas?.removeEventListener("focusin", addKeydownListener);
            canvas?.removeEventListener("focusout", removeKeydownListener);
        };
    }, [chartInitialized]);

    useEffect(() => {
        if (chartRef.current !== null) {
            const chart = getInstanceByDom(chartRef.current);
            chart?.setOption(option, settings);
        }
    }, [option, settings]);

    return <div ref={chartRef} style={{ width: "100%", height: "250px", ...style }} />;
}
