exports.up = function (knex) {
  return knex.schema.alterTable("ProductionLine", (table) => {
    table.boolean("deleted").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("ProductionLine", (table) => {
    table.dropColumn("deleted");
  });
};
