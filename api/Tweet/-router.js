
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
      res.status(404).json({ message: `Tweeet id ${req.params.id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching the comment.." });
  }
 });




router.post("/", mw.restricted,payloadCheck, async (req, res, next) => {
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
router.put("/:id", mw.restricted, payloadCheck,  async (req, res) => {
  const postId = req.params.id;
  const { content } = req.body;

  try {
    const updatedPost = await Posts.updatePost(postId, content);
    if (updatedPost) {
      res.json({ message: `Tweet id ${postId}, updated...` })
    } else {
      res.status(400).json({ message: `Error in updating TweetpostId ${postId}!..` })
    }

   } catch (error) {
         next(env);
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
        res.json({ message: `Tweet id ${req.params.post_id}, deleted.. `});
      } else {
        next({ status: 404, message: `Error in deleting tweet id ${req.params.id}!..`  });
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
 