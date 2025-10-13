'use client'
import { increment } from "@/app/actions/counterAction"
import { useTransition, useState } from "react"

export default function Counter({ initalState = 0 }) {
    const [count, setCount] = useState(initalState)
    const [isPending, startTransition] = useTransition()

    const handleSubmit = () => {
        startTransition(async () => {
            const newCount = await increment()
            setCount(newCount)
        })
    }
    return <div>
        <h1>{isPending ? 'updating...' : `Count:${count}`}</h1>
        <button onClick={handleSubmit} disabled={isPending}>+</button>
    </div>
}
