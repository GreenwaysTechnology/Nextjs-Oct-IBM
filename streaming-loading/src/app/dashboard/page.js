import React from "react"

const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})
const Hello = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 9000, import('../components/hello'))
    })
})
const Hai = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, import('../components/hai'))
    })
})
export default function DashBoard() {

    return <div>
        <h1>Header</h1>
        <React.Suspense fallback={<h1>Welcome is loading...</h1>}>
            <Welcome />
        </React.Suspense>
        <React.Suspense fallback={<h1>Hello is loading...</h1>}>
            <Hello />
        </React.Suspense>
        <React.Suspense fallback={<h1>Hai is loading...</h1>}>
            <Hai />
        </React.Suspense>
        <h2>Footer</h2>
    </div>
}