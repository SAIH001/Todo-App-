const express = require("express");
const dotenv = require("dotenv").config();
const ConnectDB  = require("./config/DB");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use('/api/todoapp',require('./routes/todoRoutes'))
app.use('/api/useraccount',require('./routes/userAccountRoutes'))
app.use('/api/useraccount/login',require('./routes/loginRoutes'))






app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`Server is running on the port of  ${process.env.PORT}`);
})