const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');
const userModel = require('../../api/User/-model');
const bcrypt = require("bcryptjs");

const generateToken = async (user) => {
  const payload = {
      id: user.user_id,
      name:user.username,
      role: user.role_name
  }
  const options = {
      expiresIn: "3h"
  }
  const token = jwt.sign(payload, JWT_SECRET, options);
  
  return token;
}

const  restricted = (req,res,next) =>{
   const token = req.headers.authorization;
   if(!token){
     res.status(401).json({message:"Token gereklidir"})
   }else{
     //token ın geçerli olup olmadığına bak
       jwt.verify(token , JWT_SECRET , (err , decodedToken) =>{
         if(err){
           res.status(401).json({message:"Token gecersizdir"})
         }else {
           req.decodedToken = decodedToken;
           next();
         }
       })
   }
}


async function usernameVarmi(req,res,next) {
   const {username} = req.body;
   const user = await userModelserModel.getByFilter({username:username})
   if(!user) {
     res.status(401).json({message:"Geçersiz kriter"})
     
   }else{
     next();
   }
 
 
 }

 async function payloadValid (req,res,next){
   try{
      const {username , password} = req.body;
      if(!username || !password){
          res.status(400).json({message:'Username ve password gereklidir'})
      }else{
         next();
      }
   }catch(err){
      next(err);
   }
 } 

 const loginPasswordValid = async function (req, res, next) {
   try {
     const { username, password } = req.body;
     const user = await userModel.findUserBy({ username: username });
     if (!user) {
       res.status(404).json({ message: "böyle bir user yok" });
     } else {
       let isPasswordValid = bcryptjs.compareSync(password, user.password);
       if (!isPasswordValid) {
         res.status(400).json({ message: "geçersiz kriterler" });
       } else {
         next();
       }
     }
   } catch (error) {
     next(error);
   }
 };

 function sifreGecerlimi(req,res,next) {
   const {password} = req.body;
   if(!password || password.length <3){
     res.status(422).json({message:"Şifre 3 karakterden fazla olmamlı"})
   }else{
     const hashedPassword = bcrypt.hashSync(password , HASH_ROUND);
     req.hashedPassword= hashedPassword;
     next();
   }
}
 

module.exports ={restricted,generateToken , usernameVarmi,sifreGecerlimi,loginPasswordValid,payloadValid}