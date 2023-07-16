/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("Users" , tbl =>{
    tbl.increments('user_id').primary();
    tbl.string('username', 128).notNullable().unique();
    tbl.string('name', 128).notNullable();
    tbl.string('password').notNullable();
    tbl.string('email').notNullable().unique();  
    tbl.timestamp('created_at').defaultTo(knex.fn.now());    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropSchemaIfExists('Users');
};
