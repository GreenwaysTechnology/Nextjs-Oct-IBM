'use client'

import { getUsers, addUser, updateUser, deleteUser } from "@/app/actions/userAction";

import { useState,useEffect } from "react";

export default function HomePage() {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [form, setForm] = useState({ name: "", email: "" });

    useEffect(() => {
        async function fetchUsers() {
            const data = await getUsers();
            setUsers(data);
        }
        fetchUsers();
    }, []);
    // Add User
    async function handleAdd(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");

        await addUser(name, email);
        setUsers(await getUsers()); // refresh
        e.target.reset();
    }

    // Start Editing
    function handleEdit(user) {
        setEditUser(user.id);
        setForm({ name: user.name, email: user.email });
    }

    // Save Update
    async function handleUpdate(e) {
        e.preventDefault();
        await updateUser(editUser, form.name, form.email);
        setUsers(await getUsers()); // refresh
        setEditUser(null); // exit edit mode
        setForm({ name: "", email: "" });
    }

    // Delete User
    async function handleDelete(id) {
        await deleteUser(id);
        setUsers(await getUsers());
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">User Management</h1>

            {/* Add User */}
            {!editUser && (
                <form onSubmit={handleAdd} className="my-4 flex gap-2">
                    <input
                        name="name"
                        placeholder="Name"
                        className="border px-2"
                        required
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        className="border px-2"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4">
                        Add
                    </button>
                </form>
            )}

            {/* Edit Form */}
            {editUser && (
                <form onSubmit={handleUpdate} className="my-4 flex gap-2">
                    <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Name"
                        className="border px-2"
                        required
                    />
                    <input
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Email"
                        className="border px-2"
                        required
                    />
                    <button type="submit" className="bg-yellow-500 text-white px-4">
                        Update
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setEditUser(null);
                            setForm({ name: "", email: "" });
                        }}
                        className="bg-gray-400 text-white px-4"
                    >
                        Cancel
                    </button>
                </form>
            )}

            {/* User List */}
            <ul className="space-y-4">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="border p-2 flex justify-between items-center"
                    >
                        <div>
                            <p>
                                <b>{user.name}</b> ({user.email})
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => handleEdit(user)}
                                className="bg-yellow-500 text-white px-2"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleDelete(user.id)}
                                className="bg-red-500 text-white px-2"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
