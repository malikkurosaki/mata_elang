// import { AdminLayout } from '@layout'
import { useEffect } from 'react'
import { accScoreState } from '../hstate'
import AdminHome from '../layout/AdminHome/admin_home'
import AdminLayout from '../layout/AdminLayout/AdminLayout'
import SocketClient from '../socket_client'

function Home({ dashboardHome }) {

    useEffect(SocketClient.handler, [])
    return (
        <AdminLayout>
            <AdminHome />
        </AdminLayout>
    )
}

export default Home;
