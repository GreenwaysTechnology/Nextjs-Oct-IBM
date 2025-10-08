import TODOS from "@/app/mock-data/todos"
import Link from "next/link"

export function fetchTodos() {
    return TODOS
}

export default function TodosMasterPage() {
    const todos = fetchTodos()
    return <div>
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>
                    <Link href={{pathname:`/todos/${todo.id}`}}>
                        <span>{todo.title}</span>
                    </Link>

                </li>
            })}
        </ul>
    </div>
}