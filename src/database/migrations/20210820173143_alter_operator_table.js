exports.up = function (knex) {
  return knex.schema.alterTable("Operator", (table) => {
    table.boolean("deleted").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("Operator", (table) => {
    table.dropColumn("deleted");
  });
};
