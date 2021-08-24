const db = require("../../database/connection");
module.exports = async (name, machineId) => {
  const insertedOperators = await db("Operator")
    .insert({ name, machineId })
    .returning("*");

  return insertedOperators[0];
};
