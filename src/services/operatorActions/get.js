const db = require("../../database/connection");

const safeDate = (date) => new Date(date).toISOString();

const getDateFilterWhereCondition = (dateFilter) => {
  let whereClause = "";
  if (dateFilter.startDate) {
    whereClause += `AND created_at >= '${safeDate(dateFilter.startDate)}'\n`;
  }
  if (dateFilter.endDate) {
    whereClause += `AND created_at <= '${safeDate(dateFilter.endDate)}'`;
  }

  return whereClause;
};

module.exports = async ({
  operatorId,
  productionLineId,
  groupByOperator,
  ...dateFilter
}) => {
  const query = `
    SELECT *
    FROM "OperatorAction" as oa
    WHERE 1=1
    ${operatorId ? `AND oa."operatorId" = ${operatorId}` : ""}
    ${productionLineId ? `AND oa."productionLineId" = ${productionLineId}` : ""}
    ${getDateFilterWhereCondition(dateFilter)}
    
    `;
  console.log(query);
  const operatorActions = await db.raw(query);
  return operatorActions.rows;
};
