'use client'
import { useState } from "react"

export default function Post() {
    //post list
    const [posts, setPosts] = useState([{
        id: 1, title: 'React', body: 'This is react post'
    }, {
        id: 2, title: 'Angular', body: 'This is Angular Post'
    }
    ])
    //Edit or Add status
    const [isEditing, setIsEditing] = useState(false)
    //collect form data 
    const [form, setForm] = useState({ title: '', body: '', id: null })

    //handleSubmit
    const handleSubmit = (evt) => {
        evt.preventDefault()
        isEditing ? updatePost() : addPost()
    }

    const updatePost = () => {
        console.log('update post is called')

    }
    const addPost = () => {
        const newPost = { id: Date.now(), title: form.title, body: form.body }
        //add new Post into array
        setPosts([...posts, newPost])
        clearForm()
    }

    const clearForm = () => {
        setForm({ id: null, title: '', body: '' })
    }

    return <div>
        {/* Add new Post */}
        {/* todo:Remove this after completing */}
        {JSON.stringify(form)}
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 10 }}>
                <input onChange={(e) => {
                    setForm({ ...form, title: e.target.value })
                }} type="text" value={form.title} placeholder="title" />
            </div>
            <div style={{ marginBottom: 10 }}>
                <textarea onChange={(e) => {
                    setForm({ ...form, body: e.target.value })
                }} type="text" value={form.body} placeholder="body" />
            </div>
            <div>
                <button>{isEditing ? "Update " : "Add "}Post</button>
            </div>
        </form>

        {/* List of Posts */}
        <ul>
            {
                posts.map(post => {
                    return <li key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                })
            }
        </ul>
    </div>
}