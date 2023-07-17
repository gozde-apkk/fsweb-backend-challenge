
const db =require('../../data/db-config');
//kullanıcıyı veritabanından al
function getAll  () {
   return db('Users');
}
//idil ebul
function getById (id) {
    return db('Users').where({user_id: user_id }).first();
}
//filtreleyerek ara
function getByFilter(filter) {
    return db('users').where(filter);
  }

  //kullanıcıyı sil
  async function removeUser(id) {
    return await db('users').where("user_id", id).delete();
};
//kullanıcı ekle
async function insertUser(newUser) {
    await db("users").insert(newUser);
};
//kullanıcıyı güncellet
async function updateUser(id, payload) {
    return await db('users').where("user_id", id).update(payload);
};

module.exports = {getAll, getById , getByFilter,removeUser,updateUser,insertUser}