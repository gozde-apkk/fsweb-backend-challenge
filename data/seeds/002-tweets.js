const { date } = require("yup");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tweets').truncate()
  await knex('tweets').insert([
    {tweet_id: 1, tweet_content: 'Let your workings remain a mystery. Just show people the results.',created_at:new Date(), user_id:1},
    {tweet_id: 2, tweet_content: 'Not-knowing is true knowledge. Presuming to know is a disease.',created_at:new Date(), user_id:2},
    {tweet_id: 3, tweet_content: 'Act without doing; work without effort.',created_at:new Date(), user_id:3},
    {tweet_id: 4, tweet_content: 'Do you have the patience to wait until your mud settles and the water is clear? Can you remain unmoving until the right action arises by itself?',created_at:new Date(), user_id:4},
    {tweet_id: 5, tweet_content: 'When you look for it, there is nothing to see. ',created_at:new Date(), user_id:5},
    {tweet_id: 6,tweet_content: 'Act without doing; work without effort,created_at:new Date().',created_at:new Date(), user_id:6},
    {tweet_id: 7, tweet_content: 'Act without doing; work without effort,created_at:new Date().',created_at:new Date(), user_id:7},
  ]);
};
tweet_