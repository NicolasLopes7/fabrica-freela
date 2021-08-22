const connection = require("../../database/connection");
module.exports = async () => {
  const query = `
  SELECT 
   mac.id,
   op.name AS "operatorName",
   op.id AS "operatorId",
   pl.id AS "productionLineId",
   pl.name AS "productionLineName",
   mac.name
  FROM "Machines" as mac
   LEFT JOIN "Operator" as op ON op."machineId" = mac.id
   LEFT JOIN "ProductionLine" as pl ON mac."productionLineId" = pl."id"
  WHERE mac.deleted=false AND pl.deleted=false
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
  }));
};
