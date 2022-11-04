import { useHookstate } from "@hookstate/core";
import ChartGraph from 'echarts-for-react';
import { Container } from "react-bootstrap";
import AdminLayout from "../../layout/AdminLayout/AdminLayout";
const DashboardReport = () => {
    const getData = fetch(`/api/dashboard/graph-chart-json`).then(e => e.text())
    const state = useHookstate(getData);

    if (state.promised) return <AdminLayout>
        <div>loading</div>
    </AdminLayout>
    let webkitDep = JSON.parse(state.value);
    var option;
    option = {
        legend: {
            data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
        },
        series: [
            {
                type: 'graph',
                layout: 'force',
                animation: false,
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                draggable: true,
                data: webkitDep.nodes.map(function (node, idx) {
                    node.id = idx;
                    return node;
                }),
                categories: webkitDep.categories,
                force: {
                    edgeLength: 5,
                    repulsion: 20,
                    gravity: 0.2
                },
                edges: webkitDep.links
            }
        ]
    };
    return <AdminLayout>
        <div >
            ini dashboard report
            <Container>
                <ChartGraph
                    style={{ height: 80 + "vh" }}
                    option={option} />
            </Container>
        </div>
    </AdminLayout>
}

export default DashboardReport;