const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cors = require("cors")


require ('dotenv').config();

app.use(express.json());
app.use(cors());

const dbConnect = process.env.DB_URI;
 mongoose.connect(dbConnect);

 const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('connected db successfully')
})

const userrouter = require('./route/user')
app.use('/user',userrouter);

const loginrouter = require('./route/login')
app.use('/login',loginrouter);


const rolerouter = require('./route/role')
app.use('/role',rolerouter);

const projectrouter = require('./route/project')
app.use('/project',projectrouter);

const jobtyperouter = require('./route/jobtype')
app.use('/jobtype',jobtyperouter);

const idproofrouter = require('./route/idproof')
app.use('/idproof',idproofrouter);



app.listen(2000, ()  =>{

    console.log("server is running")
})