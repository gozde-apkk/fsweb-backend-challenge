
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

   // Deletes ALL existing entries
   await knex('users').insert([
     {user_id: 1,
        username: 'shxdxx',
        name:'gozde',
        password:'1234',
        email:'shxdxx@gmail.com',
        created_at: new Date()},
     {user_id: 2, 
       username: 'master',
       name:'ege',
       password:'1234',
       email:'master@gmail.com',
       created_at: new Date()},
     {user_id: 3,
        username: 'developer',
        name:'ilke',
        password:'1234',
        email:'develop@gmail.com',
        created_at: new Date()}
   ]);
 };