const db = require("../../database/connection");

module.exports = async (machineId) => {
  const operator = await db("Operator").where("machineId", machineId).first();
  if (!operator) throw new Error("No operator vinculated to this machine");

  const insertedOperatorActions = await db("OperatorAction")
    .insert({
      operatorId: operator.id,
      machineId,
    })
    .returning("*");

  return insertedOperatorActions[0];
};
