
const url = 'http://localhost:3000/api/comments'
export async function fetchComments() {
    const response = await fetch(url)
    const comments = await response.json()
    return comments
}

export default async function CommentsPage() {
    const comments = await fetchComments()
    return <div className="ml-10 mt-10">
        {
            comments.map(comment => {
                return <section key={comment.id}>
                    <h1>CommentId : {comment.id} PostId:{comment.postId}</h1>
                    <h3>{comment.name}</h3>
                    <h2>{comment.email}</h2>
                    <p>{comment.body}</p>
                    <hr />
                </section>
            })
        }
    </div>
}