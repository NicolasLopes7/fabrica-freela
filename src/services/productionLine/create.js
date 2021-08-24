const db = require("../../database/connection");
module.exports = async (name) => {
  const insertedProductionLines = await db("ProductionLine").insert({ name }).returning("*");
  if (insertedProductionLines) {
    return insertedProductionLines[0];
  }
};
