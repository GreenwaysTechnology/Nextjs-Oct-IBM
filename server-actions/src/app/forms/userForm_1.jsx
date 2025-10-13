'use client'

import { CreateUser } from "@/app/actions/userAction"

export default function UserForm() {
    async function handleSubmit(evt) {
        evt.preventDefault()
        //invoke server actions
        try {
            const result = await CreateUser()
            alert(JSON.stringify(result))
        }
        catch (err) {
            console.log(err)
        }

    }

    return <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="name" placeholder="Name" required />
        </div>
        <div>
            <input type="email" name="email" placeholder="Email" required />
        </div>
        <div>
            <button type="submit">Create User</button>
        </div>

    </form>

}