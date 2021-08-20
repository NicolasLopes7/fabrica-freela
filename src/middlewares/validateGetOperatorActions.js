const allowedQueryParams = [
  "operatorId",
  "productionLineId",
  "startDate",
  "endDate",
];

module.exports = (req, res, next) => {
  const isQueryParamsSafe = req.query.every((queryParam) =>
    allowedQueryParams.includes(queryParam)
  );

  if (isQueryParamsSafe) {
    return next();
  }

  res.status(400);
  return res.json({ error: { message: "Invalid query params" } });
};
