import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([]);

  //https://todo-app-bell.onrender.com

  useEffect(()=>{
    fetch("https://todo-app-bell.onrender.com/todos")
    .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
    })
    },[todos])
  
  // useEffect(async () => {
  //   const t = await axios.get("http://localhost:3000/todos");
  //   setTodos(t.data.todos);
  // },[todos])
  
  return (
    <>
      <h1 className='text-center my-2 pb-4 text-5xl font-bold font-cursive shadow-sm'>Todo App</h1>
      <div>
        <CreateTodo></CreateTodo>
        <hr />
        <br />
        <Todos todos={todos}></Todos>
      </div>
    </>
  )
}

export default App
