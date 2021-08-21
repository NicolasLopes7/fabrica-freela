const connection = require("../../database/connection");

module.exports = async () => {
  const query = `
    SELECT
    op.id,
    op.name,
    mac.name as "machineName",
    mac.id as "machineId"
    FROM "Operator" AS op
    INNER JOIN "Machines" AS mac ON mac.id = op."machineId"
    WHERE op.deleted = false 
    `;

  const operators = await connection.raw(query);
  return operators.rows
    .sort((a, b) => a.id - b.id)
    .map((operator) => ({
      operator: {
        id: operator.id,
        name: operator.name,
      },
      machine: {
        id: operator.machineId,
        name: operator.machineName,
      },
    }));
};
