'use client'

import { useSearchParams } from "next/navigation"

export default function SuccessPage() {
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
    const email = searchParams.get('email')
    return <div className="m-50 font-bold">
        <h1>Form has been submitted successfully!</h1>
        <h2>Name : {name}</h2>
        <h2>Email :{email}</h2>
    </div>
}