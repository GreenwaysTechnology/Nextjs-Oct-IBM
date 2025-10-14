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

//static meta data
// export const metadata = {
//     title: "Todos details Page",
// };
//dynamic meta meta data

export async function generateMetadata({ params, searchParam }, parent) {
    const id = (await params).id
    const todo = await fetchTodosByid(+id)
    //return meta object
    return {
        title: `${todo.title}`,
        description: `${todo.title}`
    }
}

//override funciton which is called during build time in order to prepare the page
export async function generateStaticParams() {
    const todos = await fetchTodos()
    //generate html pages for all todos(200 todos), if you have 200 records, 200 html files
    //to be generated

    return todos.map(todo => {
        //based on id only the pages are generated, id value must be string always.
        let id = todo.id.toString()
        return {
            //id: id
            id
        }
    });
}

export default async function TodoDetailPage(props) {
    const id = (await props.params).id
    const todo = await fetchTodosByid(Number(id))
    return <div>
        <h2>id {todo.id}</h2>
        <p>title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
}

