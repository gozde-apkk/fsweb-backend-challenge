/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('likes' , tbl=>{
    tbl.increments('like_id').primary();
    tbl.integer('user_id')
        .notNullable()
        .unsigned()
        .references('user_id')
        .inTable('Users')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    tbl.integer('tweet_id')
        .notNullable()
       .unsigned()
       .references('tweet_id')
       .inTable('Tweets')
       .onDelete("CASCADE")
       .onUpdate("CASCADE");
    tbl.integer('comment_id')
       .notNullable()
       .unsigned()
       .references('comment_id')
       .inTable('Comment')
       .onDelete("CASCADE")
       .onUpdate("CASCADE");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropSchemaIfExists('likes')
};
