
const db = require("../../data/db-config");
const router = require("express").Router();
const userModel = require("./-model");
const mw =require("./-middleware");

router.get("/",async (req, res, next) => {
   try{
    const users = await userModel.getAll();
    res.json(users)
   }catch(err){
    next(err);
   }
  });

router.get("/:id" ,mw.validateUserId, async (req,res,next)=>{
  try{
    const {id} = req.params;
    const user = await userModel.getById(id);
    res.json(user)
   }catch(err){
    next(err);
  }
})

router.delete("/:id" ,async (req,res,next)=>{
  try{
    const {id} = req.params;
    const  count = await userModel.removeUser(id);
    if(count){
       res.json({message:`User id ${id}, deleted`})
    }else{
     res.status(400).json({message:`Error in deleting User id ${id}....`})
    }}catch(err){
      next(err)
    }
})

router.put("/:id" ,async (req,res,next)=>{
  try{
    const {id} = req.params;
    const  count = await userModel.updateUser(id, req.body);
    if(count){
       res.json({message:`User id ${id}, updated successfully...`})
    }else{
     res.status(400).json({message:`Error in deleting User id ${id}....`})
    }}catch(err){
      next(err)
    }
})


  router.get("/login",  async (req, res, next) => {
    const user_id = await req.decodeToken.user_id;
    Users.findUserById(user_id)
      .then((user) => {
        res.json(user);
      })
      .catch(next);
  });
module.exports = router;