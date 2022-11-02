// import { AdminLayout } from '@layout'
import { useEffect } from 'react'
import AdminHome from '../layout/AdminHome/admin_home'
import AdminLayout from '../layout/AdminLayout/AdminLayout'
const prisma = new (require('@prisma/client').PrismaClient)()


function Home({ dashboardHome }) {

    return (
        <AdminLayout>
            <AdminHome data={dashboardHome} />
        </AdminLayout>
    )
}

export async function getServerSideProps() {
    let dashboardHome = await prisma.dashboardScore.findMany({
        orderBy: {
            idx: "asc"
        }
    })

    let listDataDashboard = [
        {
            "name": "Prab"
        }
    ]
    return {
        props: {
            data: "malik",
            dashboardHome
        }
    }
}

export default Home;
