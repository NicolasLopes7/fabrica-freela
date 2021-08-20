const express = require("express");
const cors = require("cors");

const productLineRoutes = require("./routes/productLineRoutes");
const operatorActionsRoutes = require("./routes/operatorActionsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "PRODUCTION") {
  app.use((req, res, next) => {
    const { method, path } = req;

    console.log(`[${method}] - ${path}`);
    next();
  });
}

app.use(productLineRoutes);
app.use(operatorActionsRoutes);

app.listen(process.env.PORT || 5000);
console.log("Application started 🔥");
