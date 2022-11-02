import { faChartBar, faCode, faGauge, faMap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { Nav } from "react-bootstrap"

const SidebarNavItem = (props) => {
    const {
        icon,
        children,
        href,
    } = props

    return (
        <Nav.Item>
            <Link href={href} passHref>
                <Nav.Link className="px-3 py-2 d-flex align-items-center">
                    {icon ? <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
                        : <span className="nav-icon ms-n3" />}
                    {children}
                </Nav.Link>
            </Link>
        </Nav.Item>
    )
}

export default function SidebarNav() {
    return <ul className="list-unstyled">
        <SidebarNavItem icon={faGauge} href="/">
            Dashboard
        </SidebarNavItem>
        <SidebarNavItem icon={faCode} href="/pokemons">
            Penyebaran
        </SidebarNavItem>
        <SidebarNavItem icon={faMap} href="/contoh">
            TopoGraphy
        </SidebarNavItem>
        <SidebarNavItem icon={faChartBar} href="/race-spirit">
            Race Spirit
        </SidebarNavItem>
        <SidebarNavItem icon={faChartBar} href="/trainai">
            Train Ai
        </SidebarNavItem>
    </ul>

}