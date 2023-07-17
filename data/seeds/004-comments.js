/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {comment_id: 1, content: 'Muhteşem', created_at: new Date(), user_id:1, tweet_id:1},
    {comment_id: 2, content: 'Bravo', created_at: new Date(), user_id:2, tweet_id:4},
    {comment_id: 3, content: 'Sizi kutlarım', created_at: new Date(), user_id:3, tweet_id:2},
    {comment_id: 4, content: 'Harika birisin', created_at: new Date(), user_id:4, tweet_id:3},
    {comment_id: 5, content: 'Teşekkürler..', created_at: new Date(), user_id:5, tweet_id:5}
  ]);
};
