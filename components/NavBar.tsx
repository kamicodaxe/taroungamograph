import Image from "next/image"
import Link from "next/link"
import logoImage from '../assets/images/logo.svg'


interface Props {
    active: string
}

const routes = [
    {
        name: "Projets",
        path: "/projects"
    },
    {
        name: "A Propos",
        path: "/about"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]
const NavBar: React.FC<Props> = ({ active }) => {
    const activeLink = (routeName: string) => {
        // TODO: Use classnames from npm
        const isActive = active.toLowerCase().includes(routeName.toLowerCase())
        console.log(isActive)
        if (isActive) return 'flex cursor-pointer link-active'
        return 'flex cursor-pointer'
    }

    return (
        <nav className="p-4 bg-black text-gray-100">
            <div className="container flex justify-between md:justify-start h-12 mx-auto">
                <Link href="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <div className="flex items-center cursor-pointer">
                        <div className="h-24 w-64 relative">
                            <Image
                                layout="fill"
                                src={logoImage}
                                className="object-contain"
                                alt="Logo - Taroungamograph by Tarounga Mbaye "
                            />
                        </div>
                    </div>
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex ml-4">
                    {
                        routes.map(route => (
                            <li className={activeLink(route.name)} key={route.name}>
                                <Link href={route.path} className="flex items-center -mb-1">
                                    <span className="p-4">
                                        {route.name}
                                    </span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

        </nav >
    )
}

export default NavBar