import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const id = (await params).id
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (!user) {
            return NextResponse.json({ message: 'User Not found' }, { status: 404 })

        }
        return NextResponse.json(user)
    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: err.status })
    }
}

export async function PUT(req, { params }) {
    try {
        const id = (await params).id
        const payload = await req.json()
        const tmpUser = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (tmpUser) {
            const user = await prisma.user.update({
                where: {
                    id: id
                },
                data: payload
            })
            return NextResponse.json(user)

        } else {
            return NextResponse.json({ message: `No User found with ${id}` }, {
                status: 404, headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: err.status })
    }
}

export async function DELETE(req, { params }) {
    try {
        const id = (await params).id
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (user) {
            await prisma.user.delete({
                where: {
                    id: id
                }
            })
            return NextResponse.json({ message: `USER with id ${id} has been successfully deleted` }, {
                status: 201, headers: {
                    'Content-Type': 'application/json'
                }
            })
        } else {
            return NextResponse.json({ message: `No User found with ${id}` }, {
                status: 404, headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: err.status })
    }
}

