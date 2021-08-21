exports.up = function (knex) {
  return knex.schema.alterTable("OperatorAction", (table) => {
    table.dropColumn("productionLineId");
    table.integer("machineId").references("id").inTable("Machines");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("OperatorAction", (table) => {
    table
      .integer("productionLineId")
      .references("id")
      .inTable("ProductionLine")
      .notNullable();

    table.dropColumn("machineId");
  });
};
