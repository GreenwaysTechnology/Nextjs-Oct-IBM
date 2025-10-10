
'use client'
import { useState, useEffect } from 'react';

export default function User() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ id: '', name: '', email: '', role: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        //if you want to read environment variables in the client , you have to add with
        //NEXT_PUBLIC_YOURVARIABLENAME
        fetch(process.env.NEXT_PUBLIC_USERS_URL)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    const handleEdit = (user) => {
        setFormData(user);
        setIsEditing(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEditing) {
            // Update user
            const res = await fetch(`${process.env.NEXT_PUBLIC_USERS_URL}/${formData.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: formData.email, role: formData.role }),
            });

            if (res.ok) {
                const updatedUser = await res.json();
                setUsers((prev) => prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
            }
            setIsEditing(false);
        } else {
            // Create new user
            const res = await fetch(process.env.NEXT_PUBLIC_USERS_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: formData.email, role: formData.role }),
            });

            if (res.ok) {
                const newUser = await res.json();
                setUsers((prev) => [...prev, newUser]);
            }
        }

        setFormData({ id: '', name: '', email: '', role: '' });
    };
    const handleDelete = async (id) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_USERS_URL}/${id}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            setUsers((prev) => prev.filter((user) => user.id !== id));
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '35px' }}>User Management</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                />
                <button type="submit">{isEditing ? 'Update User' : 'Add User'}</button>
            </form>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <div className="user-details">
                            <span>
                                {user.name} ({user.email}) - {user.role}
                            </span>
                        </div>
                        <div className="actions">
                            <button onClick={() => handleEdit(user)}>Edit</button>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}


