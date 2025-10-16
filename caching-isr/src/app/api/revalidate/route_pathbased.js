import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"



export async function GET(request, { params }) {
    const path = request.nextUrl.searchParams.get('path') || '/timecache/Kolkata'
    revalidatePath(path)
    return NextResponse.json({ revalidate: true, now: new Date(), cache: 'no-store' })
}