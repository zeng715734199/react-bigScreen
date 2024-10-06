import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import china from '../geo/china.json';

export const Chart6 = () => {
    const divRef = useRef(null);
    const colors = {'qinghai': '#BB31F7', 'gansu': '#15B8FD', 'sichuan': '#06E1EE'};
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        echarts.registerMap('CN', china as object);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            series: [
                {
                    type: 'map',
                    map: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '甘肃省', value: 1},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['gansu'],
                        borderColor: '#01A7F7',
                    },
                    emphasis: {
                        label: {color: 'white'},
                        areaColor: '#5470C6',
                    },
                },
                {
                    type: 'map',
                    map: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '四川省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['sichuan'],
                        borderColor: 'yellow',
                    },
                    emphasis: {
                        label: {color: 'white'},
                        areaColor: '#5470C6',
                    },
                },
                {
                    type: 'map',
                    map: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '青海省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['qinghai'],
                        borderColor: '#01A7F7',
                    },
                    emphasis: {
                        label: {color: 'white'},
                        areaColor: '#5470C6',
                    },
                },

            ]
        }));
    }, []);

    return (
        <div className="bordered 籍贯">
            <h2>全市犯罪人员籍贯分布地</h2>
            <div className="wrapper">
                <div ref={divRef} className="chart"/>
                <div className="legend bordered">
                    <span className="icon" style={{background: colors['gansu']}}/>甘肃籍
                    <span className="icon" style={{background: colors['sichuan']}}/>四川籍
                    <span className="icon" style={{background: colors['qinghai']}}/>青海籍
                </div>
                <div className="notes">此地图仅显示了中国的部分区域</div>
            </div>
        </div>
    );
};