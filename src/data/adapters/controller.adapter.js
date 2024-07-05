const HttpResponse = require("../models/http/http-response.model");
const ServerError = require("../models/http/http-server-error.model");

module.exports = class Controller {
  constructor(schema) {
    this.schema = schema;
  }
  async create(req, res) {
    try {
      if (!req.body) {
        return res
          .status(400)
          .json(new ServerError(400, "Fields are required"));
      }
      const newData = await this.schema.create(req.body);
      return res
        .status(201)
        .json(new HttpResponse(`Entity Created Successfully`, true, newData));
    } catch (error) {
      return res
        .status(500)
        .json(new ServerError(false, "Internal server error"));
    }
  }
  async deleteOne(req, res) {
    try {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json(new ServerError(false, "Id is required"));
      }
      await this.schema.deleteOne({ where: { id } });
      return res
        .status(200)
        .json(new HttpResponse(`Entity Deleted Successfully`, 200, {}));
    } catch (error) {
      return res
        .status(500)
        .json(new ServerError(false, "Internal server error"));
    }
  }
  async getAll(req, res) {
    try {
      const results = await this.schema.readAll();
      return res
        .status(200)
        .json(new HttpResponse(`Data retrieved Successfully`, true, results));
    } catch (error) {
      return res
        .status(500)
        .json(new ServerError(false, "Internal server error"));
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json(new ServerError(400, "El id es requerido"));
      }
      const result = await this.schema.readOne(id);
      return res
        .status(200)
        .json(new HttpResponse(`Entity retrieved Successfully`, true, result));
    } catch (error) {
      return res
        .status(500)
        .json(new ServerError(false, "Internal server error"));
    }
  }
  async updateOne(req, res) {
    try {
      const { id } = req.query;
      if (!id) {
        return res
          .status(400)
          .json(new ServerError(false, "El id es requerido"));
      }
      await this.schema.updateOne(req.body, {
        where: { id },
      });
      return res
        .status(200)
        .json(new HttpResponse(`Entity updated Successfully`, true, req.body));
    } catch (error) {
      return res
        .status(500)
        .json(new ServerError(false, "Internal server error"));
    }
  }
};
