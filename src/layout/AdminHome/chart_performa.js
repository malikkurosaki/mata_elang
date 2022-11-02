import Echart from 'echarts-for-react'
import { useEffect, useState } from 'react'


function ChartPerforma({ width, height, className }) {
    const [options, setOption] = useState();

    useEffect(() => {

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
                            value: 50,
                            name: 'SCORE'
                        }
                    ]
                }
            ]
        };

        setOption(option)
    }, [])

    return <div key={Math.random()}>
        {
            options ? <Echart option={options} /> : <div>loading ...</div>
        }
    </div>
}

export default ChartPerforma;
