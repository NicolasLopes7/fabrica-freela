exports.up = function (knex) {
    return knex.schema.createTableIfNotExists("OperatorAction", (table) => {
      table.increments("id").notNullable();
      table.string("type").notNullable();
      table
        .integer("operatorId")
        .references("id")
        .inTable("Operator")
        .notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("OperatorAction");
  };
  