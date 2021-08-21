const { Router } = require("express");

const OperatorController = require("../controllers/OperatorController");

const validateUpdateData = require("../middlewares/validateUpdateOperatorData");

const routes = Router();

routes.post("/operator", OperatorController.create);
routes.put(
  "/operator/:operatorId",
  validateUpdateData,
  OperatorController.update
);
routes.get("/operators", OperatorController.index);
routes.delete("/operator/:operatorId", OperatorController.delete);

module.exports = routes;
