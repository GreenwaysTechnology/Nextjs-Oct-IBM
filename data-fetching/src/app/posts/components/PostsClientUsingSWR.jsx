'use client'

import useSWR from "swr";

function fetchPosts(...args) {
    return fetch(...args).then(res => res.json())
}

export default function FetchPostsUsingSWR() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const { data, error, isLoading } = useSWR(url, fetchPosts)
    if (error) {
        return <div>
            <h1>Failed to Return</h1>
        </div>
    }
    if (isLoading) {
        return <h1>Loading....</h1>
    }
    return <div>
        <ul>
            {data.map(post => {
                return <li key={post.id}>
                    {post.title}
                </li>
            })}
        </ul>
    </div>
}

