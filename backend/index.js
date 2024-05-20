//write basic express boilerplate code
// with express.json() middleware

const express = require("express");
const {createTodo} = require("./types");
const {todo} = require("./db");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); //this will make sure all post end points will work will be able to parse the json body


//create post endpoint for creating a todo
app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    
    res.json({
        msg: "Todo created"
    })
})

//create get endpoint for getting todos
app.get("/todos", async function(req,res){
    const todos = await todo.find();

    res.json({
        todos
    })
})

//create put endpoint for marking a specific todo completed

// app.put("/completed", async function(req,res){
//     const updatePayload = req.body.id;
//     const parsedPayload = updateTodo.safeParse(updatePayload);

//     if(!parsedPayload.success){
//         res.status(411).json({
//             msg: "You sent the wrong inputs",
//         })
//         return;
//     }

//     //update it in mongodb
//     await todo.findByIdAndUpdate(
//         updatePayload.$oid,
//         {
//         completed: true //mark todo update
//     })

//     res.json({
//         msg: "Todo marked as completed"
//     })
// })


app.put('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const t = await todo.findById(id);

        const completedStatus = t.completed;

        if(completedStatus == false)
        {
            const updatedTodo = await todo.findByIdAndUpdate(id, { completed: true });
        }

        else{
            const updatedTodo = await todo.findByIdAndUpdate(id, { completed: false });
        }
        

        if (!updatedTodo) {
            return res.status(404).send('Todo not found');
        }

        // const todo = await todo.findById(id);

        // if (todo) {
        // const newCompletedStatus = !todo.completed; // Toggle the completed status
        // const updatedTodo = await Todo.findByIdAndUpdate(id, { completed: newCompletedStatus }, { new: true });
        // console.log(updatedTodo);
        // } else {
        // console.log("Todo item not found.");
        // }
        // return res.json(updatedTodo);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});


app.delete('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTodo = await todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).send('Todo not found');
        }

        return res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.listen(3000);
