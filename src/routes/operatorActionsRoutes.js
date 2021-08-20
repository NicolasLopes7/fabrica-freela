const { Router } = require("express");

const OperatorActionsController = require("../controllers/OperatorActionsController");

const routes = Router();

routes.post("/operatorAction", OperatorActionsController.create);
routes.get("/operatorActions", OperatorActionsController.index);

module.exports = routes;
