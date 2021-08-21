const { Router } = require("express");

const MachineController = require("../controllers/MachineController");
const routes = Router();

routes.post("/machine", MachineController.create);
routes.get("/machines", MachineController.get);
routes.delete("/machine/:id", MachineController.delete);

module.exports = routes;
