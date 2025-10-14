export async function fetchTodosByid(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}

export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}

export default async function TodoDetailPage(props) {
    const todo = await fetchTodosByid(Number(props.params.id))
    return <div>
        <h2>id {todo.id}</h2>
        <p>title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
}

export async function generateStaticParams() {
    const todos = await fetchTodos()
    //generate html pages for all todos(200 todos), if you have 200 todos, 200 html files 
    //will be generated 

    return todos.map(todo => {
        //object key is going to be html page name
        let id = todo.id.toString()
        return {
            id:id
        }
    })
}