const db = require("../../database/connection");
module.exports = async () => {
  const query = `
  SELECT
  pl.id,
  pl.name,
  COUNT(
      DISTINCT(mac.id)
  ) AS machines,
  COUNT(oa.id) AS actions
  FROM "ProductionLine" AS pl
  LEFT JOIN "Machines" AS mac ON mac."productionLineId" = pl.id
  LEFT JOIN "OperatorAction" AS oa ON oa."machineId" = mac.id
  WHERE pl.deleted = false
  GROUP BY 1
  ORDER BY id DESC;
    `;
  const productionLines = await db.raw(query);
  return productionLines.rows;
};
