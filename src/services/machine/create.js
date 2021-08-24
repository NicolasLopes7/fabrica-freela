const db = require("../../database/connection");
module.exports = async (name, productionLineId) => {
  const insertedMachines = await db("Machines")
    .insert({ name, productionLineId })
    .returning("*");

  return insertedMachines[0];
};
