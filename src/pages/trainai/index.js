import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import ChartTree from 'echarts-for-react'
import { StateFragment, useHookstate } from "@hookstate/core";
import { useEffect } from "react";
import xstate from "../../xstate";
import config from '../../../project_config.json'

const TrainAi = ({ data }) => {

    useEffect(() => {
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

        xstate.trainAiState.set(val => val = option);
    }, [])

    return <AdminLayout>
        <StateFragment state={xstate.trainAiState} >
            {state => <ChartTree style={{ minHeight: 2000 }} option={state.value} />}
        </StateFragment>
    </AdminLayout>
}

export async function getServerSideProps() {
    const data = await (await fetch(`${config.host}/api/dashboard/tree-chart-json`)).json();
    return {
        props: {
            data: data
        }
    }
}

export default TrainAi;