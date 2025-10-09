import { NextResponse } from "next/server";
import USERS from "@/app/mock-data/users";

export async function GET(req, { params }) {
    const id = (await params).id
    const user = USERS.find(tmpUser => tmpUser.id === +id)
    if (!user) {
        return NextResponse.json({ error: 'User Not Found' }, { status: 404 })
    }
    return NextResponse.json(user)
}
export async function PUT(req, { params }) {
    const id = (await params).id
    const body = await req.json()
    const userIndex = USERS.findIndex(tmpUser => tmpUser.id === +id)
    if (userIndex === -1) {
        return NextResponse.json({ error: 'User Not found' }, { status: 404 })
    }
    USERS[userIndex] = { ...USERS[userIndex], ...body }
    return NextResponse.json(USERS[userIndex])
}

export async function DELETE(req, { params }) {
    const id = (await params).id
    let index = USERS.findIndex(tmpUser => tmpUser.id === id)
    USERS.splice(index)
    return NextResponse.json({ message: 'User has been deleted' })
}