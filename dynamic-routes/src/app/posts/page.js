import Link from "next/link"

export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
}

export default async function PostPage() {
    const posts = await fetchPosts()
    return <div>
        <ul>
            {posts.map(post => {
                return <li key={post.id}>
                    <Link href={{ pathname: `/posts/${post.id}` }}>{post.title}</Link>
                </li>
            })}
        </ul>
    </div>
}