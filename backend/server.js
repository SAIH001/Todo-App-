const express = require("express");
const dotenv = require("dotenv").config();
const ConnectDB  = require("./config/DB");

const app = express();
app.use(express.json());




app.use('/api/todoapp',require('./routes/todoRoutes'))
app.use('/api/useraccount',require('./routes/userAccountRoutes'))






app.listen(process.env.PORT || 5000,()=>{
    ConnectDB();
    console.log(`Server is running on the port of ${process.env.PORT || 5000}`);
})