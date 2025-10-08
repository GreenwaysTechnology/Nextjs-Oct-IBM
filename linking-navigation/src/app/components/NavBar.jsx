'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import './links.css'

export default function NavigationBar() {
    const pathname = usePathname()
    console.log(pathname)
    return <nav>
        <ul>
            <li>
                <Link className={`${pathname === '/' ? 'active' : ''}`} href={{ pathname: '/' }}>Home</Link>
            </li>
            <li>
                <Link className={`${pathname === '/about' ? 'active' : ''}`} href={{ pathname: '/about' }}>About</Link>
            </li>
            <li>
                <Link className={`${pathname === '/contact' ? 'active' : ''}`} href={{ pathname: '/contact' }}>Contact</Link>
            </li>
        </ul>
    </nav>
}