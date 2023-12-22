require("dotenv").config();
const express= require("express");
const dbConnect= require("./config/db");
const app= express();

const PORT= process.env.PORT || 4001;

app.use(express.json());

// import routes 

const Todoroutes= require("./routes/todos");
app.use("/api/v1", Todoroutes);

// dbconnection 
dbConnect();

app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`)
});


app.get("/",(req,res)=>{
    res.send("<h1>successful entry</h1>")
})

