import Link from "next/link"

export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}

export const metadata = {
    title: "Todos Master",
};


export default async function TodosMasterPage() {
    const todos = await fetchTodos()
    return <div>
        <h1>Total Todos {todos.length}</h1>
        <ul>
            {
                todos.map(todo=>{
                    return <li key={todo.id}>
                        <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                    </li>
                })
            }
        </ul>
    </div>
}
