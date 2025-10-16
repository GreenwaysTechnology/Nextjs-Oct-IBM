import { cookies } from "next/headers";
import { verifyJwt } from "@/app/lib/jwt";

export default async function Dashboard() {
    const cookieStore = await cookies()
    const token = cookieStore.get("session")?.value;
    const session = token ? await verifyJwt(token) : null;
    console.log(session)
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            {session ? (
                <>
                    <p>Welcome, user with session: {session.username} </p>
                    <form action="/api/logout" method="post">
                        <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
                            Logout
                        </button>
                    </form>
                </>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
}
