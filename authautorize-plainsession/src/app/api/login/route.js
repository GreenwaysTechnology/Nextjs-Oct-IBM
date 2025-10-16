import { cookies } from "next/headers"
import { NextResponse } from "next/server"


export async function POST(req) {
    //read username and password
    const { username, password } = await req.json()
    //lookup user name and password from the db but now we use dummy user name and password
    if (username === 'admin' && password === '123') {
        //generate SessionId in realtime we generate using jwt kind of lib
        const sessionToken = "user-123"
        //create Cookie and append session Id as part of cookie
        const cookieStore = await cookies()
        //set cookie information
        cookieStore.set("session", sessionToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 // 1 hour valid
        })
        return NextResponse.json({ success: true })
    }
    return NextResponse.json({ success: false, message: 'Invalid Credentials' }, { status: 401 })
}