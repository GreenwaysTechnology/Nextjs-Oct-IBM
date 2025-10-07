import TODOS from "../mock-data/todos"

export default function TodosPage() {
    return <>
        <ul>
            {TODOS.map(todo => {
                return <li key={todo.id}>
                    <span>{todo.title} {todo.status ? "Completed" : "In Progress"}</span>
                </li>
            })}
        </ul>
    </>
}