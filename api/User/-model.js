
const db =require('../../data/db-config');
//kullanıcıyı veritabanından al
function getAll  () {
    return db("users as u").join("roles", "u.role_id", "r.role_id")
    .select(
            "u.id",
            "name",
            "username",
            "password",
            "email",
            "r.rolename as role_name"
    )
   };

//idil ebul
function getById (id) {
    return db('Users as u')
    .join("roles" , "u.role_id","r.role_id")
    .where("user_id", user_id )
    .select(
        "u.user_id",
        "u.user_name",
        "u.email",
        "r.rolename as role_name"
    ).first(); 
}
//filtreleyerek ara
function getByFilter(filter) {
    return db('Users as u')
    .join("roles" , "u.role_id","r.role_id")
    .where(filter )
    .select(
        "u.user_id",
        "u.user_name",
        "u.email",
        "r.rolename as role_name"
    );
  }

//kullanıcıyı sil
  async function removeUser(id) {
    return await db('users').where("user_id", id).delete();
};
//kullanıcı ekle
async function insertUser(payload) {
  const [ids] = await db("users").insert(payload);
  return getById[ids];
};
//kullanıcıyı güncellet
async function updateUser(id, payload) {
    return await db('users').where("user_id", id).update(payload);
};
async function findUser(username, password){
    let existUser = allUser.find(x=>x.username == username && x.password == password);
    return existUser
}
module.exports = {getAll, getById , getByFilter,removeUser,updateUser,insertUser}