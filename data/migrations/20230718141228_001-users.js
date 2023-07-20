/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
       . createTable('users' , tbl=>{
            tbl.increments().primary();
            tbl.string('username').notNullable().unique();
            tbl.string('password').notNullable()
            tbl.string('email').notNullable().unique()
            tbl.string('name').notNullable()
            tbl.timestamp('created_at').defaultTo(knex.fn.now())
            tbl.integer("role_id") //foreing key
                .unsigned()
                .references("role_id") 
                .inTable("roles")  
            })   
          
        .createTable("posts", tbl=>{
             tbl.increments()
             tbl.string("content").notNullable()
             tbl.integer("like_count").defaultTo(0)
             tbl.integer("user_id")  //foreign key
                .unsigned()
                .references("user_id")
                .inTable("users")
         })
         .createTable("comments", (table) => {
          table.increments().primary();
          table
            .integer("user_id")
            .unsigned()
            .references("user_id")
            .inTable("users");
          table
            .integer("post_id")
            .unsigned()
            .references("post_id")
            .inTable("posts");
          table.string("comment").notNullable();
          table.timestamps(true, true);
         })
         .createTable("likes", (table) => {
          table.increments().primary();
          table
            .integer("user_id")
            .unsigned()
            .references("user_id")
            .inTable("users");
          table
            .integer("post_id")
            .unsigned()
            .references("post_id")
            .inTable("posts");
          table.timestamps(true, true);
          table.primary(["user_id", "post_id"]);
        })
        .createTable("roles", tbl =>{
          tbl.increments('role_id')
          tbl.string("rolename",255).notNullable().unique();
        });};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("likes")
    .dropTableIfExists("comments")
    .dropTableIfExists("posts")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};