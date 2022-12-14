import { AdminLayout } from "@layout";
import { NextPage } from "next";
import { Props } from "react-resize-detector/build/ResizeDetector";
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'

const Contoh: NextPage<Props> = (props) => {
    return (
        <AdminLayout>
            <Map height={500} defaultCenter={[-6.200000, 106.816666]} defaultZoom={5}>
                <Overlay anchor={[-8.409518, 115.188919]} offset={[50, 50]}>
                    <img src='https://smpia16.al-azhar.sch.id/wp-content/uploads/2020/10/ganjar-500x500.png' width={50} height={50} alt='' />
                </Overlay>

                <Overlay anchor={[-7.9790, 112.6373]} offset={[50, 50]}>
                    <img src='https://smpia16.al-azhar.sch.id/wp-content/uploads/2020/10/ganjar-500x500.png' width={50} height={50} alt='' />
                </Overlay>
                <Overlay anchor={[-2.107,120.360]} offset={[50, 50]}>
                    <img src='https://smpia16.al-azhar.sch.id/wp-content/uploads/2020/10/ganjar-500x500.png' width={50} height={50} alt='' />
                </Overlay>
                <ZoomControl />
            </Map>
        </AdminLayout>
    )
}

export default Contoh;