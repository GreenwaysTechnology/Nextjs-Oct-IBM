import Link from "next/link";

export default function NavigationBar() {
    return <nav>
        <ul>
            <li>
                <Link href={{ pathname: '/' }}>Home</Link>
            </li>
            <li>
                <Link href={{ pathname: '/about' }}>About</Link>
            </li>
            <li>
                <Link href={{ pathname: '/contact' }}>Contact</Link>
            </li>
        </ul>
    </nav>
}