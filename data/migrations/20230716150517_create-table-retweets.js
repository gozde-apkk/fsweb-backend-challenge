/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Retweets' , tbl =>{
    tbl.increments('retweet_id').primary()
    tbl.integer('user_id')
       .notNullable()
       .unsigned()
       .references('user_id')
       .inTable('Users')
       .onDelete('CASCADE')
       .onUpdate('CASCADE')
    tbl.integer('tweet_id')
       .notNullable()
       .unsigned()
       .references('tweet_id')
       .inTable('Tweet')
       .onDelete('CASCADE')
       .onUpdate('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Retweets');
};
