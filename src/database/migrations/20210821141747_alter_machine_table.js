exports.up = function (knex) {
  return knex.schema.alterTable("Machines", (table) => {
    table.string("name");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("Machines", (table) => {
    table.dropColumn("name");
  });
};
