//1-IMPORT


const express = require("express");
//express kullanarak server instance yarat
const server = express();
require('dotenv').config();


//2-GLOBAL MIDDLEWARE



//3-ROUTER
server.get("/", (req,res) =>{
    res.json({message:"Server up and running..."})
})



//4-ERROR MIDDLEWARE


//5-EXPORT

module.exports= server