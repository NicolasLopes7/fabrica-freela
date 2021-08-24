const connection = require("../../database/connection");
module.exports = async () => {
  const query = `
  SELECT 
   count(oa.id) AS actions,
   mac.id,
   op.name AS "operatorName",
   op.id AS "operatorId",
   pl.id AS "productionLineId",
   pl.name AS "productionLineName",
   mac.name,
   mac.deleted AS "doubleDeleted"
  FROM "Machines" as mac
   RIGHT JOIN "Operator" as op ON mac.id = op."machineId"
   LEFT JOIN "ProductionLine" as pl ON mac."productionLineId" = pl."id"
   LEFT JOIN "OperatorAction" as oa ON mac."id" = oa."machineId"
   WHERE mac.deleted = false
  GROUP BY 2, 4, 5
  ORDER BY id DESC
  `;

  const machines = await connection.raw(query);
  return machines.rows.map((machine) => ({
    id: machine.id,
    name: machine.name,
    operator: {
      id: machine.operatorId,
      name: machine.operatorName,
    },
    productionLine: {
      id: machine.productionLineId,
      name: machine.productionLineName,
    },
    actions: machine.actions,
  }));
};
