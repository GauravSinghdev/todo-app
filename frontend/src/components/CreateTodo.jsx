import { useState } from "react";

const CreateTodo = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (

        <div className="grid grid-cols-1 mx-96  mt-10 items-center">
            <input className="border-2 border-black rounded h-12 px-2 focus:shadow-lg  focus:shadow-red-500 text-xl" type="text" placeholder="title"
            required 
                onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);
                }}/><br />
            <input className="border-2 border-black rounded h-12 px-2 focus:shadow-lg  focus:shadow-red-500 text-xl" type="text" placeholder="description" 
                onChange={(e) => {
                    const value = e.target.value;
                    setDescription(value);
                    }}/><br />

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mb-10 hover:scale-105"
                onClick={() => {
                    //use axios here for better code
                    fetch("http://localhost:3000/todo",{
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers:{
                            "Content-type" : "application/json"
                        }
                    })
                    .then(async function(res) {
                        const json = await res.json();
                        alert("Todo added");
                    })
                }}>Add a todo</button>
        </div>
        

    )
}

export default CreateTodo;