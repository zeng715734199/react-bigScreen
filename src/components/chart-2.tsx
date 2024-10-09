import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {mockNumListObj} from "../shared/utils";

export const Chart2 = () => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<echarts.ECharts>(null)
    setInterval(async () => {
        const {data} = await mockNumListObj()
        updateChart(data)
    }, 1000)
    const updateChart = (data: Record<string, number[]>) => {
        chartRef.current?.setOption(createEchartsOptions({
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {show: false},
                axisLabel: {show: false}
            },
            yAxis: {
                axisTick: {show: false},
                type: 'category',
                data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局',
                    '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
                axisLabel: {
                    formatter(val: string) {
                        return val.replace('公安局', '\n公安局');
                    }
                }
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: data['2011'],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#2034f9'
                        }, {
                            offset: 1,
                            color: '#04a1ff'
                        }]),
                    }
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: data['2012'],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#b92ae8'
                        }, {
                            offset: 1,
                            color: '#6773e7'
                        }]),
                    }
                }
            ]
        }));
    }
    useEffect(() => {
        mockNumListObj().then(({data}) => {
            chartRef.current = echarts.init(divRef.current);
            updateChart(data)
        })
    }, []);
    return (
        <div className="bordered 破获排名">
            <h2>案件破获排名</h2>
            <div ref={divRef} className="chart"/>
            <div className="legend">
                <span className="first"/> 破案排名1
                <span className="second"/> 破案排名2
            </div>
        </div>
    );
};