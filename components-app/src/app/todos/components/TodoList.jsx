// import TODOS from "../../mock-data/todos"
import TODOS from "@/app/mock-data/todos"

export function TodoList(props) {

    return <>
        <h1 style={{fontSize:30,fontStyle:'italic'}}>{props.title}</h1>
        <ul>

            {TODOS.map(todo => {
                return <li key={todo.id}>
                    <span>{todo.title} {todo.status ? "Completed" : "In Progress"}</span>
                </li>
            })}
        </ul>
    </>
}