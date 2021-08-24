const { Router } = require("express");

const OperatorActionsController = require("../controllers/OperatorActionsController");
const validateGetOperatorActions = require("../middlewares/validateGetOperatorActions");
const routes = Router();

routes.get("/operatorAction/:machineId", OperatorActionsController.create);
routes.get(
  "/operatorActions",
  validateGetOperatorActions,
  OperatorActionsController.index
);

module.exports = routes;
