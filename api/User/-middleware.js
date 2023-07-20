const UserModel = require('./-model');

const payloadCheck = (req,res,next)=>{
  const {username,  name ,email ,password} = req.body;
  if(!name || !name.trim() || name.lenght <=3){
    next({status:400 , message:"Name alanı 3 karakterden büyük olmalı..."})
  }else if(!email || !email.trim() || email.lenght <=3){
    next({status:400 , message:"Geçerli bi email giriniz..."})
  }else if(!username || !username.trim() || username.lenght <=3){
    next({status:400 , message:"Username alanı 3 karakterden büyük olmalı..."})
  }else if(!password || !password.trim() || password.lenght <=3){
    next({status:400 , message:"Password alanı 3 karakterden büyük olmalı..."})
  }else{
    next();
  }
} 

const isValidEmail = (email) => {
  return String(email)
      .toLowerCase()
      .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}




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

module.exports ={validateUserId, validateLogin,payloadCheck,isValidEmail}