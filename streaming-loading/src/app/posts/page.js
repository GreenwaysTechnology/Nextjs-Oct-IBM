// import { Suspense } from "react"
import React from "react"

//component
export async function Posts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store'
    })
    const posts = await res.json()
    return <ul className="space-y-2">
        {posts.slice(0, 5).map(post => {
            return <li className="p-2 border rounded-lg shadow-sm" key={post.id}>
                <h3 className="font-bold">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.body}</p>
            </li>
        })}
    </ul>

}


export default function PostsPage() {
    return <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Posts (Heading)</h1>
        {/* wrap Posts Component into suspense */}
        <React.Suspense fallback={<p className="text-blue-600 font-bold">Posts Loading....</p>}>
            <Posts />
        </React.Suspense>
        <h2>
            Footer
        </h2>
    </div>

}