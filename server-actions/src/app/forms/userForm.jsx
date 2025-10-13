import { CreateUser } from "@/app/actions/userAction"

export default function UserForm() {
    return <form action={CreateUser} method="POST">
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