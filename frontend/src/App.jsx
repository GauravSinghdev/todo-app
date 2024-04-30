import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
    })
    },[todos])
  
  return (
    <>
      <h1 className='text-center my-2 pb-4 text-5xl font-bold font-cursive shadow-sm'>Todo App</h1>
      <div>
        <CreateTodo></CreateTodo>

        <Todos todos={todos}></Todos>
      </div>
    </>
  )
}

export default App
