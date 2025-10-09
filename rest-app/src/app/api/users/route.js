import { NextResponse } from "next/server";
import USERS from "@/app/mock-data/users";

export async function GET(req) {
    return NextResponse.json(USERS)
}

export async function POST(req) {
    //read Payload
    const body = await req.json()
    const newUser = {
        id: USERS.length + 1, ...body
    }
    USERS.push(newUser)
    return NextResponse.json(newUser, { status: 201 })
}