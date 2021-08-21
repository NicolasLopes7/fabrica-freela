const db = require("../../database/connection")("Machines");
module.exports = async (name, productionLineId) => {
  const insertedMachines = await db
    .insert({ name, productionLineId })
    .returning("*");

  return insertedMachines[0];
};
