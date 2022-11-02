import AdminScoreWidget from "./admin_score_widget";
import ChartLineDashboard from "./chart_line_dashboard";

let ModelData = {
    name: "",
    score: ""
}

/**
 * @param {object} params 
 * @param {ModelData[]} params.data
 */
function AdminHome({ data }) {
    return <div>
        <AdminScoreWidget data={data} />
        <div style={{ height: 100 }}>
        </div>
        <ChartLineDashboard />
    </div>
}

export default AdminHome;
