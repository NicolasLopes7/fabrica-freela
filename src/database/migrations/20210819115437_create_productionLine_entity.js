exports.up = function (knex) {
  return knex.schema.createTableIfNotExists("ProductionLine", (table) => {
    table.increments("id").notNullable();
    table.string("name").notNullable();

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ProductionLine");
};
