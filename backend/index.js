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
app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    //update it in mongodb
    await todo.update({
        _id: req.body.id //what id todo you want  to update,
    },{
        completed: true //mark todo update
    })

    res.json({
        msg: "Todo marked as completed"
    })
})


app.listen(3000);