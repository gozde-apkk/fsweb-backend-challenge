

const router = require("express").Router();

router.get("/" ,(req,res,next)=>{
    res.json("Router working as expected");
})

module.exports = router;