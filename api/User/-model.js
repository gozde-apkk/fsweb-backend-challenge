
const db =require('../../data/db-config');
//kullanıcıyı veritabanından al
function getAll  () {
    return db("users as u").join("roles as r", "u.role_id", "r.role_id")      //     select*from users as u 
    .select(                                                                  //     join roles as r 
            "u.user_id",                                                       //    on u.role_id = r.role_id
            "name",
            "username",
            "password",
            "email",
            "r.rolename as role_name"
    )
   };

//idil ebul
function getById (id) {
    return db('users as u').where("u.id",id).first(); 
}
//filtreleyerek ara
function getByFilter(filter) {
    return db('users as u')
    .where(filter )
    .select(
        "u.id",
        "name",
        "email",
        "password"
    )
    .first();
  }
function getByEmail(email){
  return db('users as u')
  .where("email",email)
  .select(
      "u.id",
      "name",
      "email",
      "password"
  )
  .first();
}
//kullanıcıyı sil
  async function removeUser(id) {
    return await db('users as u').where("u.id", id).delete();
};
//kullanıcı ekle
async function insertUser(payload) {
  const [id] = await db("users").insert(payload);
  return getById(id);
};
//kullanıcıyı güncellet
async function updateUser(id, payload) {
    return await db('users as u ').where("u.id", id).update(payload);
};
async function findUser(username, password){
    let existUser = allUser.find(x=>x.username == username && x.password == password);
    return existUser
}
module.exports = {getAll,getByEmail, getById , getByFilter,removeUser,updateUser,insertUser}