exports.up = function (knex) {
  return knex.schema.alterTable("OperatorAction", (table) => {
    table.dropColumn("type");
    table
      .integer("productionLineId")
      .references("id")
      .inTable("ProductionLine")
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("OperatorAction", (table) => {
    table.string("type").notNullable();
    table.dropColumn("productionLineId");
  });
};
