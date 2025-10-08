// 'use client'
import { useState } from "react"
import { Button } from "@carbon/react";

export default function Increment() {
    const [value, setValue] = useState(0)
    return <>
        <h1>Increment</h1>
        <h2>Value : {value}</h2>
        {/* <button onClick={() => {
            setValue(value + 1)
        }}>+</button> */}
        <Button onClick={() => {
            setValue(value + 1)
        }}>+</Button>
    </>
}
