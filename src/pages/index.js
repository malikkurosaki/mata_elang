import {AdminLayout} from '@layout'
import AdminHome from '../layout/AdminHome/admin_home'

function Home(props) {
    return (
        <AdminLayout>
            <AdminHome data={props}/>
        </AdminLayout>
    )
}

export async function getServerSideProps() {
    let listDataDashboard = [
        {
            "name": "Prab"
        }
    ]
    return {
        props: {
            data: "malik"
        }
    }
}

export default Home;
