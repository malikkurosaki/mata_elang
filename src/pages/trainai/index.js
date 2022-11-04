import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import ChartTree from 'echarts-for-react'
import { useHookstate } from "@hookstate/core";

const TrainAi = () => {
    const getData = fetch('/api/dashboard/tree-chart-json').then(e => e.text());
    const state = useHookstate(getData)
    if (state.promised) return <AdminLayout>loading ...</AdminLayout>
    const data = JSON.parse(state.value);

    const option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',
                data: [data],
                top: '1%',
                left: '15%',
                bottom: '1%',
                right: '7%',
                symbolSize: 7,
                orient: 'RL',
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                },
                leaves: {
                    label: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    }
                },
                emphasis: {
                    focus: 'descendant'
                },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    }

    return <AdminLayout>
        <ChartTree style={{minHeight: 2000}} option={option} />
    </AdminLayout>
}

export default TrainAi;