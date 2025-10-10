import { NextResponse } from "next/server"

const url = 'https://jsonplaceholder.typicode.com/comments'

export async function GET(req, { params }) {
    try {
        const id = (await params).id
        const response = await fetch(`${url}/${+id}`)
        const comment = await response.json()
        if (comment.id) {
            return NextResponse.json(comment)
        }
        return NextResponse.json({ message: `Comment for ${id} not found` }, { status: 404 })

    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: 404 })
    }
}
export async function PUT(req, { params }) {
    try {
        const id = (await params).id
        const { name, email, body } = await req.json()
        if (name || email || body) {
            const response = await fetch(`${url}/${+id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, body })
            })
            if (response.status === 500) {
                return NextResponse.json({ message: 'Comment not Found' }, { status: 404 })
            }
            const updatedComment = await response.json()
            return NextResponse.json(updatedComment)
        }
        return NextResponse.json({ message: 'Payload not supplied' }, { status: 404 })
    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: 500 })

    }
}

export async function DELETE(req, { params }) {
    try {
        const id = (await params).id
        const response = await fetch(`${url}/${+id}`, {
            method: 'DELETE'
        })
        const comment = await response.json()
        console.log(comment,response.status)
        return NextResponse.json({comment:'The comment has been deleted'})
    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: 500 })

    }
}