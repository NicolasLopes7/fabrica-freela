const ProductionLineService = require("../services/productionLine");
const HTTPError = require("../helpers/HTTPError");
class ProductionLineController {
  async create(req, res) {
    const { name } = req.body;

    if (!name) {
      res.status(400);
      return res.json({ error: { message: "missing name param" } });
    }

    try {
      const productionLine = await ProductionLineService.create(name);

      return res.json({ productionLine });
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { ...updateProductionLineData } = req.body;

    if (Object.keys(req.body).length === 0) {
      res.status(400);
      return res.json({
        error: { message: "Missing params to update productionLine" },
      });
    }

    try {
      await ProductionLineService.update(id, updateProductionLineData);
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
      const productionLines = await ProductionLineService.get();
      return res.json({ productionLines });
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await ProductionLineService.delete(id)
      return res.sendStatus(200)
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
    return res.sendStatus(200);
  }
}

module.exports = new ProductionLineController();
