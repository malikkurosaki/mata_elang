// import { AdminLayout } from '@layout'
import { useEffect } from 'react'
import AdminHome from '../layout/AdminHome/admin_home'
import AdminLayout from '../layout/AdminLayout/AdminLayout'
import SocketClient from '../socket_client'
const prisma = new (require('@prisma/client').PrismaClient)()

function Home({ dashboardHome }) {
    // let router = useRouter()

    // router.events.on('routeChangeStart', url => {
    //     Swal.showLoading()
    // })

    // router.events.on('routeChangeComplete', url => {
    //     Swal.close()
    // });

    // useEffect(() => {
    //     fetch('/api/socket').finally(() => {
    //         const socket = io()

    //         socket.on('connect', () => {
    //             console.log('connect')
    //             socket.emit('hello')
    //         })

    //         socket.on("apa", data => {
    //             console.log(data)
    //         })

    //         socket.on('disconnect', () => {
    //             console.log('disconnect')
    //         })
    //     })
    // }, [])

    useEffect(SocketClient.handler, [])

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

    return {
        props: {
            data: "malik",
            dashboardHome
        }
    }
}

export default Home;
