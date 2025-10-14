import Link from "next/link"

export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}
export default async function TodosMasterPage() {
    const todos = await fetchTodos()
    return <div className="m-40">
        <h1>Total Todos {todos.length}</h1>
        <ul>
            {
                todos.map(todo=>{
                    return <li>
                        <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                    </li>
                })
            }
        </ul>
    </div>
}
