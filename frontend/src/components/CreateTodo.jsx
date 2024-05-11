import { useState } from "react";

const CreateTodo = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (

        <div className="grid grid-cols-1 mx-[600px]  mt-10 items-center">
            <input className=" rounded h-12 px-3 focus:shadow-lg  focus:shadow-red-500 text-2xl border-none focus:border-1" type="text" placeholder="Title"
            required 
                onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);
                }}/>
                <br />
            <input className="rounded h-12 px-3 focus:shadow-lg  focus:shadow-red-500 text-2xl border-none focus:border-none" type="text" placeholder="Description" 
                onChange={(e) => {
                    const value = e.target.value;
                    setDescription(value);
                    }}/>
                <br />

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg px-5 py-2.5 mx-4 dark:bg-blue-600 dark:hover:bg-blue-700 text-xl focus:outline-none dark:focus:ring-blue-800 mb-10 hover:scale-105 h-[50px] "
                onClick={() => {
                    //use axios here for better code
                    fetch("https://todo-app-bell.onrender.com/todo",{
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
                        location.reload();
                    })
                }}>Add a Todo</button>
        </div>
        

    )
}

export default CreateTodo;
