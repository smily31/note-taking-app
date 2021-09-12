const router = require("express").Router()

const Todo = require("../models/Todo");
// const NotTodo = require("../models/NotTodo");

// routes 
router

.get("/" , async (req,res) => {
    const allTodo = await Todo.find();
    res.render("index", {todo: allTodo});
})

// .get("/", async (req,res) => {
//     const allNotTodo = await NotTodo.find();
//     res.render("index", {nottodo : allNotTodo});
// });


module.exports = router;