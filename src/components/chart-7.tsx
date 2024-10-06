import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

export const Chart7 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
    }, []);

    return (
        <div className="年龄段-图1">7
            <div ref={divRef} className="chart">

            </div>
        </div>
    );
};