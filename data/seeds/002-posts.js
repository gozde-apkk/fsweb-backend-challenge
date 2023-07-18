/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').truncate()
  await knex("posts").insert([
    { post_id: 1, user_id: 1, content: "Let your workings remain a mystery", like_count: 0 },
    { post_id: 2, user_id: 2, content: "Not-knowing is true knowledge.", like_count: 0 },
    { post_id: 3, user_id: 3, content: "Act without doing; work without effort.", like_count: 0 },
  ]);
};

