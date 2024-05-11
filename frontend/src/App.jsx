import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import axios from 'axios'
import { SiGithub } from "react-icons/si";

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
      <h1 className='text-center my-2 pb-4 text-5xl font-bold font-cursive shadow-sm ms-44'>Todo App
      
      <a href='https://github.com/GauravSinghdev/todo-app-MERN-Stack-App' target='_blank' className='float-right pr-20 active:text-white hover:text-white'><SiGithub/></a>
      </h1>

      
      <div>
        <CreateTodo></CreateTodo>
        <hr className='mx-[300px] mb-4'/>
        <br />
        <Todos todos={todos}></Todos>
      </div>
    </>
  )
}

export default App
