/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('comments').truncate()
    await knex("comments").insert([
        { comment_id: 1, user_id: 1, post_id: 1, comment: "Muhteşemm!" },
        { comment_id: 2, user_id: 2, post_id: 2, comment: "woww!" },
        { comment_id: 3, user_id: 3, post_id: 3, comment: "Teşekkürler!" },
        { comment_id: 4, user_id: 1, post_id: 1, comment: "Harikasın!" },
        { comment_id: 5, user_id: 2, post_id: 2, comment: "I like it !" },
        { comment_id: 6, user_id: 3, post_id: 1, comment: "Devanımını bekliyoruz!" },
        
      ]);
  };
  