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
router.get("/:id", payloadCheck, async (req, res) => {
  const commentId = req.params.id;
  try {
    const comment = await Comments.getCommentById(commentId);
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({ message: "Yorum bulunamadı." });
    }
  } catch (error) {
    res.status(500).json({ message: "Yorumu getirirken bir hata oluştu." });
  }
})



router.post("/",  mw.restricted,async (req ,res, next) =>{
  const {content} = req.body;
  const comment = {
   content,
   user_id:req.decodedToken.user_id,
   post_id: req.body.post_id
  }
  try{
  const newComment = await Comments.insertComment(comment);
  res.status(201).json(newComment);
  }catch(err){
    next(err);
  }
})

router.put("/:id",  async (req, res) => {
  const commentId = req.params.id;
  const { content } = req.body;
  try {
    const updatedComment = await Comments.updateComment(commentId, content);
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: "Yorum güncellenirken bir hata oluştu." });
  }
});


module.exports = router;