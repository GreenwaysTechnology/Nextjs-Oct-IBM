import { cookies } from "next/headers";
import { signJWT } from '@/app/lib/jwt'

export async function POST(req) {
    const { username, password } = await req.json();

    // ✅ Replace with real authentication
    if (username === "admin" && password === "123") {
        // Create session token (in real apps use JWT or DB session id)
        const sessionToken = await signJWT({ username, role: "admin" });
        const cookieStore = await cookies()
        cookieStore.set("session", sessionToken, {
            httpOnly: true,   // cannot be accessed by JS
            secure: process.env.NODE_ENV === "production",    // only over HTTPS
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60,  // 1 hour
        });
        return Response.json({ success: true });
    }

    return Response.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}
