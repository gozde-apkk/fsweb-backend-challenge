const router = require("express").Router();
const Comments = require("./-model");
const { payloadCheck } = require("./-middleware");
const mw = require("../Auth/-middleware");


router.get('/', async( req,res,next) =>{
  try{
    const allComment = await Comments.getAllComments();
    res.json(allComment);
  }catch(err){
    next(err);
  }
})


// GET /comments/:id
router.get("/:id",  async (req, res) => {
  const commentId = req.params.id;
  try {
    const comment = await Comments.getCommentById(commentId);
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({ message:`${req.params.id} comment not found...` });
    }
  } catch (error) {
    res.status(500).json({ message:" An error occurred while fetching the comment." });
  }
})



router.post("/",  mw.restricted,payloadCheck,  async (req ,res, next) =>{
  const {comment} = req.body;
  const commented = {
   comment,
   user_id:req.decodedToken.id,
   post_id: req.body.post_id
  }
  try{
  const newComment = await Comments.insertComment(comment);
  res.status(201).json(newComment);
  }catch(err){
    next(err);
  }
})

router.put("/:id",  async (req, res, next) => {
  const {id}= req.params;
  const { comment } = req.body;
  try {
    const updatedComment = await Comments.updateComment(id, comment);
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: `Error in updating Comment id ${id}!..`});
  }
});


router.delete('/:id',  async (req, res, next) => {
  try {
      let { id } = req.params;
      const isDeleted = await Comments.removeComment(req.params.id);
      if (isDeleted) {
          res.json({ message: `Comment id ${id}, deleted...` })
      } else {
          res.status(400).json({ message: `Error in deleting comment id ${id}!..` })
      };
  } catch (err) {
      next(err);
  };
});

module.exports = router;