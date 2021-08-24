const connection = require("../../database/connection");

module.exports = async () => {
  const query = `
    SELECT
    op.id,
    op.name,
    mac.id AS "machineId",
    mac.name AS "machineName",
    pl.name as "productLineName",
    COUNT(oa.id) AS actions
    FROM "Operator" AS op
    LEFT JOIN "Machines" AS mac ON op."machineId" = mac.id 
    LEFT JOIN "ProductionLine" AS pl ON mac."productionLineId" = pl.id
    LEFT JOIN "OperatorAction" AS oa ON op.id = oa."operatorId"
    WHERE op.deleted = false 
    GROUP BY 1,3,5
    ORDER BY id DESC
    `;
  // INNER JOIN "Machines" AS mac ON mac.id = op."machineId"
  //     mac.name as "machineName",
  // mac.id as "machineId"
  const operators = await connection.raw(query);
  return operators.rows
    .map((operator) => ({
      id: operator.id,
      name: operator.name,
      machine: {
        id: operator.machineId,
        name: operator.machineName,
      },
      productionLine: {
        name: operator.productLineName,
      },
      actions: operator.actions,
    }));
};
