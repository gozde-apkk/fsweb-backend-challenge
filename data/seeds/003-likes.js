/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('likes').del()
  await knex('likes').insert([
    {like_id: 1, user_id: 1 ,tweet_id: 2, comment_id: 2},
    {like_id: 2, user_id: 3 , tweet_id: 1, comment_id: 4},
    {like_id: 3, user_id: 4 , tweet_id: 3, comment_id: 1}
  ]);
};
