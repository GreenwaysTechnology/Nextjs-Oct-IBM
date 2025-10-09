export async function fetchPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json()
}

export default async function PostPage(props) {
    const id = (await props.params).id
    const post = await fetchPost(id)
    return <div>
          <h1>User Id : {post.userId} Id : {post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
    </div>
}