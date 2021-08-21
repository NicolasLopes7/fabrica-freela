const { Router } = require("express");

const UserControllers = require("../controllers/user")

const routes = Router()


routes.post("/user", UserControllers.create)
routes.delete("/user/:userId", UserControllers.delete)


module.exports = routes;