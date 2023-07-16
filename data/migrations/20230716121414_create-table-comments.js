/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Comments', tbl =>{
    tbl.increments('comment_id').primary()
    tbl.string('content')
    tbl.timestamp('created_at').defaultTo(knex.fn.now())
    tbl.integer('user_id')
        .notNullable()
        .references('user_id')
        .inTable('Users')
        .unsigned()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    tbl.integer('tweet_id')
        .notNullable()
       .references('tweet_id')
       .inTable('tweets')
       .unsigned()
       .onDelete('CASCADE')
       .onUpdate('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropSchemaIfExists('comments');
};
