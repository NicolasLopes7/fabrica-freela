const db = require("../../database/connection")("ProductionLine");
module.exports = async (name) => {
  const insertedProductionLines = await db.insert({ name }).returning("*");
  if (insertedProductionLines) {
    return insertedProductionLines[0];
  }
  throw Error("An error occured on create productionLine");
};
