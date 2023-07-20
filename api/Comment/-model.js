const db = require("../../data/db-config");
const Posts = require("../Tweet/-model");
const { post } = require("./-router");

function getAllComments (){
  return db("comments");
}
//ID'ye göre bir yorumu veritabanından al
const getCommentById = async function (id) {
  const comment = await db("comments as c").where("c.id",id).first();
  return comment;
};

//Post id ye göre
const getCommentByPostId = async function(post_id){
return await db("comments").where({post_id : post_id}).first();
}
/*
const insertComment = async function (comment) {
 const [id] = await db("comments").insert({comment:comment}).returning("comment_id");

  return getCommentById(id.comment_id);
};
*/
const updateComment = async (id, payload) => {
  return await db("comments as c").where("c.id",id).update(payload);
 
};

module.exports = {getAllComments, updateComment, getCommentById,getCommentByPostId };