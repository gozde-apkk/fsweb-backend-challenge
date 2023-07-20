const db = require("../../data/db-config");

const getPosts = async function () {
  const allPosts = await db("posts as p")
    .join("users as u", "u.id", "p.user_id")
    .select(
      "p.id",
      "p.content",
      "u.id",
      "u.username"
    );
  return allPosts;
};
async function getPostById(id) {
  return db('posts ').where("id",id).first(); 
  }
  
  const insertPost = async function (post) {
    const [insertedId] = await db("posts").insert(post);
    return await getPostById(insertedId);
  };
  const remove = async function (id) {
    return db("posts as p").where("id", id).del();
  };
  const updatePost = async function (payload){
    const [id] = await db("users").insert(payload);
    return getPostById(id);
  }
  module.exports = { insertPost, getPostById, getPosts, remove ,updatePost};

