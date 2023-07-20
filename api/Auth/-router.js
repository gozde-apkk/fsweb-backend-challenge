

const router = require("express").Router();
const mw = require('./-middleware');
const bcrypt = require('bcryptjs');
const userModel = require('../User/-model');
const {HASH_ROUND}= require("../../config");
const umw = require('../User/-middleware');



router.post(
    "/register", umw.payloadCheck,
    async (req, res, next) => {
      try {
        const model = {
          username : req.body.username,
          name: req.body.name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password , Number(HASH_ROUND)),
        };
        console.log(model.password);
        const newUser = await userModel.insertUser(model);
       if(newUser){
        res.status(201).json({message: `Wecome ${model.name}...`})
       }else{
        next({status:400 , message:"Create user error. ..."})
       }
      } catch (error) {
        next(error);
      }
    }
  );


  router.post("/login", async (req, res,next)=>{
    try{
      const {email , password} = req.body;
      const registeredUser = await userModel.getByEmail(email)
      console.log(registeredUser);
      if(registeredUser &&  bcrypt.compareSync(password, registeredUser.password)){
        const token =mw.generateToken(registeredUser)
        console.log(token);
        res.json({message: `"Welcome back ${registeredUser.name} `, "token": token})
      }else{
        next({status:401, message:"Invalid credentials"})
      }
    }catch(err){
      next(err);
    }
  })





module.exports = router;