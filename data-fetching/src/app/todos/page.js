//data fetching in server component using fetch 
export async function fetchTodos() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        const response = await fetch(url)
        return response.json()
    }
    catch (err) {
        return err
    }

}

export default async function TodosPage() {
    const todos = await fetchTodos()
    return <>
        <h1>Todos Page</h1>
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    </>
}
