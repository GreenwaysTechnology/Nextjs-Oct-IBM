import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"



export async function GET(request, { params }) {
    const tag = request.nextUrl.searchParams.get('timerTag') || 'timerTag'
    revalidateTag(tag)
    return NextResponse.json({ revalidate: true, now: new Date(), cache: 'no-store' })
}