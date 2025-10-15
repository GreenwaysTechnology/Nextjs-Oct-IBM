'use client'

export default function Error({ error, reset }) {
    return <div className="p-4 bg-red-100 rounded">
        <h1 className="text-red-700 font-bold">Something went Wrong</h1>
        <p>{error.message}</p>
        <button className="bg-red-600 text-white rounded">Try Again</button>
    </div>
}