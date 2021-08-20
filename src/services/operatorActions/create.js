const db = require("../../database/connection");

module.exports = async (operatorId) => {
  const { productionLineId } = await db("Operator")
    .where("id", operatorId)
    .select(["productionLineId"])
    .first();

  const insertedOperatorActions = await db("OperatorAction")
    .insert({
      operatorId,
      productionLineId,
    })
    .returning("*");

    
  const operatorAction = insertedOperatorActions[0]
  return operatorAction
};
