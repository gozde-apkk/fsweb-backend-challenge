

const  restricted = (req,res,next) =>{
   next({
    status : 400,
    message : "error middleware is OK"
   })
}

module.exports ={restricted}