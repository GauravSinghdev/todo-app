
// todos = [
//     {
//         title: "go to gym",
//         description: "go to gym"
//     }
// ]

const Todos = ({todos}) => {
    return (
        <div>
            {todos.map((todo)=>{
                return <div className="text-center border-2">
                    <p className="text-2xl font-medium mb-2 mt-2">
                        <span className="font-semibold">Title: </span>
                        {todo.title}</p>
                    <p className="text-1xl font-medium">
                        <span className="font-2xl font-semibold">Description: </span>                        
                    {todo.description}</p>
                    <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >{todo.completed  == true? "Completed" : "Mark as completed"}</button>
                </div>
            })}
        </div>
    )
}

export default Todos;