exports.up = function (knex) {
    return knex.schema.alterTable("Machines", (table) => {
      table.boolean("deleted").defaultTo(false);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable("Machines", (table) => {
      table.dropColumn("deleted");
    });
  };
  