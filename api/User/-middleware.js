const UserModel = require('./-model');


async function validateUserId(req, res, next) {
    
    try{
     const user = await UserModel.getById(req.params.id);
      if(user){
        req.user = user;
        next();
        
      }else{
        res.status(400).json({message: `${id} id'li kullanıcı bulunamadı!...`})
      }
    }catch(error){
      next(error);
    }
  }

async function validateLogin(req,res,next){
    try{
        let existUser = await UserModel.findUser(req.body.username, req.body.password);
        if(!existUser){
            res.status(404).json({
                message:"Böyle bir kullanıcı yok"
            })
        }
    }catch(err){
        next(err);
    }
}

module.exports ={validateUserId, validateLogin}