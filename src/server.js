const express = require("express");
const cors = require("cors");

const productLineRoutes = require("./routes/productLineRoutes");
const operatorActionsRoutes = require("./routes/operatorActionsRoutes");
const operatorRoutes = require("./routes/operatorRoutes");
const userRoutes = require("./routes/userRoutes");

const parseQueryToString = require("./helpers/queryObjectToString");

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "PRODUCTION") {
  app.use((req, res, next) => {
    const { method, path, query, body } = req;

    console.log(`[${method}] - ${path}${parseQueryToString(query)}`);
    next();
  });
}

app.use(productLineRoutes);
app.use(operatorActionsRoutes);
app.use(operatorRoutes);
app.use(userRoutes);
app.listen(process.env.PORT || 5000);
console.log("Application started 🔥");
