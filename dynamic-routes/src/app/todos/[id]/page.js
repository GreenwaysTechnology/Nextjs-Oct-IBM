
import TODOS from "@/app/mock-data/todos"

export function fetchTodosById(id) {
    return TODOS.find(todo => todo.id === id)
}

export default async function TodosDetailsPage(props) {
    // console.log(props.params.id)
    const id = (await props.params).id
    const todo = fetchTodosById(+id)
    return <div>
         <h1>{todo.id}</h1>
         <h2>{todo.title}</h2>
         <h3>status :{todo.completed ? "Completed" : "In Progress"}</h3>
    </div>
}