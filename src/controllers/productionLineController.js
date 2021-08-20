const knex = require("../database/connection");
const HTTPError = require("../helpers/HTTPError");
const db = knex("ProductionLine");

class ProductionLineController {
  async create(req, res) {
    const { name } = req.body;

    if (!name) {
      res.status(400);
      return res.json({ error: { message: "missing name param" } });
    }

    try {
      const insertedProductionLines = await db.insert({ name }).returning("*");

      const [newProductionLine] = insertedProductionLines;

      return res.json({ productionLine: newProductionLine });
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, operators } = req.body;

    try {
      if (name) {
        await db.update({ name }).where("id", id);
      }

      if (operators) {
        for await (const operator of operators) {
          await db.update({ productionLineId: id }).where("id", operator);
        }
      }
      return res.sendStatus(200);
    } catch (error) {
      res.status(500);
      return res.json({
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack,
        },
      });
    }

  }

  async index(req, res) {
    try {
      const productionLines = await db
        .select("*")
        .where("deleted", false);
      return res.json({ productionLines });
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await db.update({ deleted: false }).where("id", id);
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
    return res.sendStatus(200);
  }
}

module.exports = new ProductionLineController();
