'use client'

import { useState } from "react"

export default function Counter(props) {
    const [value, setValue] = useState(props.initalValue)
    return <div>
        <h1>Counter {value}</h1>
        <button type="button"
            onClick={() => {
                setValue(value + 1)
                console.log('value',value)
            }}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">+</button>
    </div>
}