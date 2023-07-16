/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Tweets', tbl =>{
    tbl.increments('tweet_id').primary();
    tbl.string('tweet_content');
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
    tbl.integer('user_id')
    .unsigned()
    .notNullable()
    .references('user_id')
    .inTable('Users')
    .onUpdate('RESTRICT')
    .onDelete('RESTRICT')
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropSchemaIfExists('Tweets');
};
