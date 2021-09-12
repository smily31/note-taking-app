const router = require("express").Router();
const Todo = require("../models/Todo");

// routes
router

.post("/add/todo",(req,res) => {
    const {todo} = req.body;
    // console.log(todo);
    const newTodo = new Todo({todo});
    
    // save the todo
    newTodo
    .save()
    .then(() => {
        console.log("successfully added todo! ");
        res.redirect("/");
    })

    .catch((err) => console.log(err));
})

.get("/delete/todo/:_id", (req,res) =>{
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() =>{
        console.log("Deleted todo successfully");
        res.redirect("/");
    })
    .catch((err) => console.log(err));
});

// .post("/add/nottodo",(req,res) => {
//     const {nottodo} = req.body;
//     // console.log(nottodo);
//     const newNotTodo = new NotTodo({nottodo});
    
//     // save the nottodo
//     newNotTodo
//     .save()
//     .then(() => {
//         console.log("successfully added not todo! ");
//         res.redirect("/");
//     })

//     .catch((err) => console.log(err));
// })

// .get("/delete/nottodo/:_id", (req,res) =>{
//     const {_id} = req.params;
//     NotTodo.deleteOne({_id})
//     .then(() =>{
//         console.log("Deleted not todo successfully");
//         res.redirect("/");
//     })
//     .catch((err) => console.log(err));
// });


module.exports = router;