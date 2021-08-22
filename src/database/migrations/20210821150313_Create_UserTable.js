exports.up = function (knex) {
  return knex.schema.createTableIfNotExists("User", (table) => {
    table.increments("id").notNullable();
    table.string("login").notNullable().unique();
    table.string("password").notNullable();
    table.string("role").notNullable();

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("User");
};
