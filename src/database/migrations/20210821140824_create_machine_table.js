exports.up = function (knex) {
  return knex.schema.createTableIfNotExists("Machines", (table) => {
    table.increments("id").notNullable();
    table
      .integer("productionLineId")
      .references("id")
      .inTable("ProductionLine")
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Machines");
};
