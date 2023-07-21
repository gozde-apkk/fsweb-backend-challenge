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

const insertComment = async function (comment) {
 const [id] = await db("comments").insert(comment).then(ids => ({id : ids[0]}));
 return await getCommentById(id);
};


const updateComment = async (id, payload) => {
  await db("comments").where("comment_id",id).update(payload)
 return getCommentById(id);
 
};

async function removeComment(comment_id) {
  return await db('comments').where("comment_id", comment_id).delete();
};

module.exports = {getAllComments, updateComment, getCommentById,getCommentByPostId,insertComment ,removeComment};