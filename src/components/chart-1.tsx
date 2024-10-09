import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from "../shared/px";
import {mockNumList} from "../shared/utils";

export const Chart1 = () => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<echarts.ECharts>(null)
    setInterval(async () => {
        const {list} = await mockNumList()
        updateChart(list)
    }, 1000)
    const updateChart = (data: number[]) => {
        chartRef.current?.setOption({
            textStyle: {
                fontSize: px(12),
                color: '#79839E'
            },
            title: {show: false},
            legend: {show: false},
            xAxis: {
                data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区', '皋兰区', '榆中区', '兰州新区'],
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    fontSize: px(12),
                    formatter(val: string) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                },
            },
            grid: {
                x: px(70),
                y: px(70),
                x2: px(70),
                y2: px(70),
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    fontSize: px(12)
                }
            },
            series: [{
                type: 'bar',
                data
            }]
        });
    }
    useEffect(() => {
        mockNumList().then(({list}) => {
            chartRef.current = echarts.init(divRef.current);
            updateChart(list)
        })
    }, []);
    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"></div>
        </div>
    );
};