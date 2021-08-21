const allowedQueryParams = [
  "operatorId",
  "productionLineId",
  "startDate",
  "endDate",
];

module.exports = (req, res, next) => {
  if (Object.keys(req.query).length > 0) {
    const isQueryParamsSafe = Object.keys(req.query).every((queryParam) =>
      allowedQueryParams.includes(queryParam)
    );

    if (isQueryParamsSafe) {
      return next();
    }

    res.status(400);
    return res.json({ error: { message: "Invalid query params" } });
  }

  return next();
};
