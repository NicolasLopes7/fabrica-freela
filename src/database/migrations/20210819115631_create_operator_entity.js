exports.up = function (knex) {
  return knex.schema.createTableIfNotExists("Operator", (table) => {
    table.increments("id").notNullable();
    table.string("name").notNullable();
    table
      .integer("productionLineId")
      .references("id")
      .inTable("ProductionLine")
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Operator");
};
