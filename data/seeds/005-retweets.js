/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('retweets').del()
  await knex('retweets').insert([
    {retweet_id: 1, user_id:1, tweet_id:2},
    {retweet_id: 2, user_id:1, tweet_id:2},
    {retweet_id: 3, user_id:1, tweet_id:2}
  ]);
};
