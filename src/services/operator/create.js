const db = require("../../database/connection")("Operator");
module.exports = async (name, machineId) => {
  const insertedOperators = await db
    .insert({ name, machineId })
    .returning("*");

  return insertedOperators[0];
};
