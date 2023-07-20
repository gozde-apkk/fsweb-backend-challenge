
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

   // Deletes ALL existing entries
   await knex('users').insert([
     {id: 1,
        username: 'shxdxx',
        name:'gozde',
        password:'$2a$08$1vGK7fo58wlU1qIJBKr6Lub0lHepkkpaTOE6E4CDHJKtWK/vXVf1i',
        email:'shxdxx@gmail.com',
        role_id:1,
        created_at: new Date()},
     {id: 2, 
       username: 'master',
       name:'ege',
       password:'$2a$08$1vGK7fo58wlU1qIJBKr6Lub0lHepkkpaTOE6E4CDHJKtWK/vXVf1i',
       role_id:2,
       email:'master@gmail.com',
       created_at: new Date()},
     {id: 3,
        username: 'developer',
        role_id:3,
        name:'ilke',
        password:'$2a$08$1vGK7fo58wlU1qIJBKr6Lub0lHepkkpaTOE6E4CDHJKtWK/vXVf1i',
        email:'develop@gmail.com',
        created_at: new Date()},
        {id: 4,
          username: 'aslı',
          role_id:3,
          name:'aslıhan',
          password:'$2a$08$1vGK7fo58wlU1qIJBKr6Lub0lHepkkpaTOE6E4CDHJKtWK/vXVf1i',
          email:'mastser@gmail.com',
          created_at: new Date()}
   ]);
 };
