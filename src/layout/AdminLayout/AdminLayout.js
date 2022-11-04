
import Header from '@layout/AdminLayout/Header/Header'
import Footer from '@layout/AdminLayout/Footer/Footer'
import Sidebar, { SidebarOverlay } from '@layout/AdminLayout/Sidebar/Sidebar'
import Head from 'next/head'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import { StateFragment } from '@hookstate/core'
import xstate from '../../xstate'

export default function AdminLayout({ children }) { // Show status for xs screen
    const [isShowSidebar, setIsShowSidebar] = useState(false)

    // Show status for md screen and above
    const [isShowSidebarMd, setIsShowSidebarMd] = useState(true)

    const toggleIsShowSidebar = () => {
        setIsShowSidebar(!isShowSidebar)
    }

    const toggleIsShowSidebarMd = () => {
        const newValue = !isShowSidebarMd
        localStorage.setItem('isShowSidebarMd', newValue ? 'true' : 'false')
        setIsShowSidebarMd(newValue)
    }

    // Clear and reset sidebar
    const resetIsShowSidebar = () => {
        setIsShowSidebar(false)
    }

    const onResize = useCallback(() => {
        resetIsShowSidebar()
    }, [])

    const { ref } = useResizeDetector({ onResize })

    // On first time load only
    useEffect(() => {
        if (localStorage.getItem('isShowSidebarMd')) {
            setIsShowSidebarMd(localStorage.getItem('isShowSidebarMd') === 'true')
        }
    }, [setIsShowSidebarMd])

    return (
        <div>
            {/* <StateFragment state={xstate.nama}>
                {state => <div>{state.value}</div>}
            </StateFragment> */}
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div ref={ref}
                className="position-absolute w-100" />

            <Sidebar isShow={isShowSidebar}
                isShowMd={isShowSidebarMd} />

            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <Header toggleSidebar={toggleIsShowSidebar}
                    toggleSidebarMd={toggleIsShowSidebarMd} />
                <div className="body flex-grow-1 px-3">

                    <Suspense fallback={<Scaleton />}>
                        {children}
                    </Suspense>
                </div>

                <Footer />
            </div>

            <SidebarOverlay isShowSidebar={isShowSidebar}
                toggleSidebar={toggleIsShowSidebar} />
        </div>
    )
}


const Scaleton = () => {
    return <div className='h1'>
        loaading ...
    </div>
}