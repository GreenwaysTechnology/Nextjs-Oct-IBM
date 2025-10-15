'use client'

export default function Error({ error, reset }) {

    return <div className="p-4 bg-red-100 rounded">
        <h2 className="text-red-700 font-bold">Something Went Wrong!</h2>
        <p>{error.message}</p>
        <button className="mt-2 px-3 py-1 beg-red-600 text-white rounded" >Try Again</button>
    </div>
}