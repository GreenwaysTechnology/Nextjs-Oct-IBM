import { notFound } from "next/navigation";

async function getUser(id) {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    //     cache: "no-store",
    // });
    const res = await fetch(`https://xxxx.typicode.com/users/${id}`, {
        cache: "no-store",
    });
    if (res.status === 404) {
        notFound(); // triggers app/not-found.jsx
    }
    if (!res.ok) {
        throw new Error("Failed to fetch user"); // triggers error.jsx
    }

    return res.json();
}
export default async function UserPage({ params }) {
    const user = await getUser((await params).id);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">User Details</h1>
            <p><b>ID:</b> {user.id}</p>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
        </div>
    );
}
