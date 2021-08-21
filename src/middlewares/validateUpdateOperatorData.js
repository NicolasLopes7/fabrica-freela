const allowedParams = ["machineId", "name"];

module.exports = (req, res, next) => {
  if (Object.keys(req.body).length > 0) {
    const isQueryParamsSafe = Object.keys(req.body).every((queryParam) =>
      allowedParams.includes(queryParam)
    );

    if (isQueryParamsSafe) {
      return next();
    }

    res.status(400);
    return res.json({ error: { message: "Invalid params" } });
  }

  res.status(400);
  return res.json({ error: { message: "Invalid params" } });
};
