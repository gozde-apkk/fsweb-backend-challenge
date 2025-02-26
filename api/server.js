//1-IMPORT


const express = require("express");
//express kullanarak server instance yarat
const server = express();
require('dotenv').config();
//headerdeki başlıkları gizler
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const {restricted} = require('./Auth/-middleware');


const authRouter = require('./Auth/-router');
const userRouter = require('./User/-router');
const postRouter = require("./Tweet/-router");
const commentRouter = require("./Comment/-router");
//2-GLOBAL MIDDLEWARE
server.use(helmet());           //3rd-party middleware
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());     //build-in middleware


//3-ROUTER
server.get("/", (req,res) =>{
    res.json({message:"Server up and running..."})
})

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, userRouter);
server.use("/api/posts", postRouter);
server.use("/api/comments", commentRouter);


//4-ERROR MIDDLEWARE
server.use((err,req,res,next) =>{
    res
       .status(err.status || 500)
       .json({message :err.message || 'Server error!...'})
})

//5-EXPORT

module.exports= server