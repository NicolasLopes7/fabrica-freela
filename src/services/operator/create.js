const db = require("../../database/connection")("Operator");
module.exports = async (name, productionLineId) => {
  const insertedOperators = await db
    .insert({ name, productionLineId })
    .returning("*");

  return insertedOperators[0];
};
