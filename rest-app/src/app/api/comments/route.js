import { NextResponse } from "next/server"

const url = 'https://jsonplaceholder.typicode.com/comments'

export async function GET(req) {
    try {
        const response = await fetch(url)
        const comments = await response.json()
        return NextResponse.json(comments)
    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: 404 })
    }
}

export async function POST(req) {
    const comment = await req.json()
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    const newComment = await response.json()
    return NextResponse.json(newComment, {
        status: 201, headers: {
            'Content-Type': 'application/json', 'url': '/api/create'
        }
    })
}