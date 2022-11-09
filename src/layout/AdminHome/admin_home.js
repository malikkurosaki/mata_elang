import AdminScoreWidget from "./admin_score_widget";
import ChartLineDashboard from "./chart_line_dashboard";

function AdminHome() {

    return <div>
        <AdminScoreWidget />
        <div style={{ height: 100 }} />
        <ChartLineDashboard />
    </div>
}

export default AdminHome;
