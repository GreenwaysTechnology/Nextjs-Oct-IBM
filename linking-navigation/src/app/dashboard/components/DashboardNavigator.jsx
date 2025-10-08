'use client'

import { useRouter } from "next/navigation"

export default function DashboardNavigator() {
    const router = useRouter()
    return <div>
        <button onClick={() => {
            router.push('/contact')
        }}>Contact</button>
        <button onClick={() => {
            router.push('/about')
        }}>About</button>
    </div>
}