require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
// const MongoClient = require('mongodb').MongoClient;

const app = express();

// connection to mongodb
mongoose.connect(process.env.mongouri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function(){
    console.log("Connected successfully");
});


// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


// routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));
// app.use(require("./routes/nottodo"));


// server configuration
    app.listen(process.env.PORT, () =>{
    console.log(`server is listening at port ${process.env.PORT}`);
});
