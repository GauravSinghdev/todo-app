import axios from 'axios';
// todos = [
//     {
//         title: "go to gym",
//         description: "go to gym"
//     }
// ]

const Todos = ({todos}) => {

    
      const handleTodoCompletion = async (id) => {
        try {
          await axios.put(`https://todo-app-bell.onrender.com/todos/${id}`);
        } catch (error) {
          console.error('Error marking todo as completed:', error);
        }
      };

      const handleTodoDeletion = async (id) => {
        try {
            await axios.delete(`https://todo-app-bell.onrender.com/todos/${id}`);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div>
            {todos.map((todo)=>{
                return <div className="text-center border-[10px] mx-[500px] mb-[20px] border-gray-400 rounded-lg hover:border-green-500">
                    <p className="text-xl font-medium mb-2 mt-2">
                        <span className="font-bold text-2xl">Title: </span>
                        {todo.title}</p>
                    <p className="text-xl font-medium">
                        <span className="text-2xl font-bold">Description: </span>                        
                    {todo.description}</p>
                    <button 
                    onClick={() => handleTodoCompletion(todo._id)}
                        className={`focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-2 
                        ${todo.completed ? 'bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800' 
                        : 'bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'}`}
                    >{todo.completed  == true? "Completed: Mark as incompleted" : "Mark as completed"}</button>

                    <button 
                    onClick={() => handleTodoDeletion(todo._id)}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-2"
                    >Delete</button>
                </div>
            })}
        </div>
    )
}

export default Todos;