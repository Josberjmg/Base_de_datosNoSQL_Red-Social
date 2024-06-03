
const express = require('express');
const app = express();
const port= process.env.PORT || 9000;
const mongoose= require("mongoose");
require("dotenv").config();
const userRoutes= require("./routes/user")

//routes

app.get('/',(req,res)=>{
    res.send("welcome to my API");
});

//mongodb connect
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log('Connected to MongoDB Atlas'))
    .catch((error)=> console.error(error))

//middleware
app.use(express.json());
app.use('/api', userRoutes);




app.listen(port, ()=> console.log('server listening on port', port));

