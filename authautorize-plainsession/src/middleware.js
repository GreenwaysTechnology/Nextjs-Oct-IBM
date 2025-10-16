import { NextResponse } from "next/server"


export function middleware(req) {
    console.log('middleware is called')
    const session = req.cookies.get("session")?.value
    if (req.nextUrl.pathname.startsWith("/dashboard") && !session) {
        return NextResponse.redirect(new URL("/login", req.url))
    }
    return NextResponse.next()
}
//authorization configuration
export const config = {
    mather: ["/dashboard/:/path*"]
}