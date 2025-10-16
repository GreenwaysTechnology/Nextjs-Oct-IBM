import { SignJWT, jwtVerify } from "jose";

//private key decaration
const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "super-secret-key");

//sign JWT
export async function signJWT(payload) {

    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1h") // 1 hour expiry
        .sign(SECRET);
}

//verify JWT token is it valid or not
export async function verifyJwt(token) {
    try {
        const { payload } = await jwtVerify(token, SECRET);
        return payload;
    } catch (err) {
        console.error("JWT verify error:", err.message);
        return null;
    }
}