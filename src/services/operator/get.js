const connection = require("../../database/connection");
const db = connection("Operator");
module.exports = async () => {
  const operators = await db
    .select([
      "Operator.id",
      "Operator.name",
      connection.ref("ProductionLine.name").as("productionLineName"),
      connection.ref("ProductionLine.id").as("productionLineId"),
    ])
    .join(
      "ProductionLine",
      "ProductionLine.id",
      "=",
      "Operator.productionLineId"
    )
    .where("Operator.deleted", false);

  return operators
    .sort((a, b) => a.id - b.id)
    .map((operator) => ({
      operator: {
        id: operator.id,
        name: operator.name,
      },
      productionLine: {
        id: operator.productionLineId,
        name: operator.productionLineName,
      },
    }));
};
