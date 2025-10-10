'use client'

import { useState } from "react"

export default function Counter() {
    const [value, setVavlue] = useState(+process.env.NEXT_PUBLIC_SEED_VALUE)
    return <div className="m-20">
        <h1>Value : {value}</h1>
        <button onClick={() => {
            setVavlue(value + 1)
        }}>+</button>
    </div>
}