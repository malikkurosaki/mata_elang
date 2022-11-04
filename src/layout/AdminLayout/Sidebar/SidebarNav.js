import { faChartBar, faCode, faGauge, faMap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import { Nav } from "react-bootstrap"

const SidebarNavItem = ({ icon, children, href, isSelected }) => {
    return (
        <Nav.Item className={isSelected ? "bg-dark" : "bg-transparant"}>
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

const listNav = [
    {
        "name": "Dashboard",
        "link": "/",
        "icon": faGauge
    },
    {
        "name": "Penyebaran",
        "link": "/penyebaran",
        "icon": faGauge
    },
    {
        "name": "Topography",
        "link": "/topography",
        "icon": faGauge
    },
    {
        "name": "Race Spirit",
        "link": "/race-spirit",
        "icon": faGauge
    },
    {
        "name": "Public Tree",
        "link": "/trainai",
        "icon": faGauge
    },
    {
        "name": "Persebaran",
        "link": "/persebaran",
        "icon": faGauge
    }
]

export default function SidebarNav() {
    const router = useRouter()

    return <ul className="list-unstyled">

        {listNav.map(e => {
            return <SidebarNavItem key={Math.random()} icon={e.icon} href={e.link} isSelected={router.pathname == e.link}>
                {e.name}
            </SidebarNavItem>
        })}
        {/* <SidebarNavItem icon={faGauge} href="/">
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
        </SidebarNavItem> */}
    </ul>

}