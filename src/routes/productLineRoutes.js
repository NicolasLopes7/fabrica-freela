const { Router } = require("express");

const ProductionLineController = require("../controllers/productionLineController");

const routes = Router();

routes.post("/productLine", ProductionLineController.create);
routes.put("/productLine/:id", ProductionLineController.update);
routes.get("/productLines", ProductionLineController.index);
routes.delete("/productLine/:id", ProductionLineController.delete);

module.exports = routes;
