const { Router } = require("express");

const UserController = require("../controllers/UserController");

const routes = Router();

routes.post("/user", UserController.create);
routes.delete("/user/:userId", UserController.delete);
routes.post("/authenticate", UserController.authenticate);
routes.put("/user/:userId", UserController.update)


module.exports = routes;
module.exports = routes;
