const { Router } = require("express");

const ProductionLineController = require("../controllers/productionLineController");

const routes = Router();

routes.post("/productionLine", ProductionLineController.create);
routes.put("/productionLine/:id", ProductionLineController.update);
routes.get("/productionLines", ProductionLineController.index);
routes.delete("/productionLine/:id", ProductionLineController.delete);

module.exports = routes;
