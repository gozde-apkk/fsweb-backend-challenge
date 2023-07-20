
const router = require("express").Router();
const { payloadCheck, checkOwnPost } = require("./-middleware");
const Posts = require("./-model");
const mw = require("../Auth/-middleware");

router.get("/", async(req, res, next) => {
 try{
  const allPosts = await Posts.getPosts();
  res.json(allPosts);
  console.log(allPosts);

 }catch(err){
  next(err);
 }
});

router.get("/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Posts.getPostById(postId);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Post bulunamadı." });
    }
  } catch (error) {
    res.status(500).json({ message: "Postu getirirken bir hata oluştu." });
  }
 });

router.post("/", mw.restricted, async (req, res, next) => {
  const {content} = req.body;
  const post = {content, user_id:req.decodedToken.user_id};
  
  try {
    const newPost = await Posts.insertPost(post);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});


// PUT /posts/:id
router.put("/:id",  async (req, res) => {
  const postId = req.params.id;
  const { content } = req.body;
  const { user_id } = req. decodedToken.subject;
  const post = { content, user_id };
  try {
    const updatedPost = await postModel.updatePost(postId, post);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Post güncellenirken bir hata oluştu." });
  }
});


router.delete(
  "/:post_id",
  mw.restricted,
  async (req, res, next) => {
    let deleted = await Posts.getPostById(req.params.post_id);
    try {
      if (deleted) {
        await Posts.remove(req.params.post_id);
        res.json({ message: `${req.params.post_id} post silindi`});
      } else {
        next({ status: 404, message: "Böyle bir post yok" });
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
 