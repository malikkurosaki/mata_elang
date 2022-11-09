import Echart from 'echarts-for-react'
import { useEffect, useState } from 'react'


function ChartPerforma({ width, height, className, score }) {
    const [options, setOption] = useState();

    var option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                name: 'Pressure',
                type: 'gauge',
                progress: {
                    show: true
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value}'
                },
                data: [
                    {
                        value: score ?? 0,
                        name: 'SCORE'
                    }
                ]
            }
        ]
    };

    return <div key={Math.random()}>
        <Echart option={option} />
    </div>
}

export default ChartPerforma;
