'use client'

// import Server from "@/app/clientserverpattern/components/Server"

export default function Client(props) {
    return <div>
        <h1>Client Component</h1>
        {/* This Server Component becomes Client Compomponent automatically */}
        {/* <Server /> */}
        {props.children}
    </div>
}