const { Router } = require("express");

const OperatorController = require("../controllers/OperatorController");

const routes = Router();

routes.post("/operator", OperatorController.create);
routes.put("/operator/:operatorId", OperatorController.update);
routes.get("/operators", OperatorController.index);
routes.delete("/operator/:operatorId", OperatorController.delete);

module.exports = routes;
