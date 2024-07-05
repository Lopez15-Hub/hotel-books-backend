const express = require("express");
const router = express.Router();

const Router = require("../data/adapters/router.adapter");
const ClientController = require("../controllers/client.controller");

class ClientRoutes extends Router {
  constructor() {
    super(router, "/client");
    this.controller = new ClientController();
  }

  get() {
    this.router.get(this.initialRoute, (req, res) =>
      this.controller.getAll(req, res)
    );
  }
  getOne() {
    this.router.get(`${this.initialRoute}/find`, (req, res) =>
      this.controller.getAll(req, res)
    );
  }
  post() {
    this.router.post(this.initialRoute, (req, res) =>
      this.controller.create(req, res)
    );
  }
  put() {
    this.router.put(`${this.initialRoute}/update`, (req, res) =>
      this.controller.updateOne(req, res)
    );
  }
  delete() {
    this.router.delete(`${this.initialRoute}/delete`, (req, res) =>
      this.controller.deleteOne(req, res)
    );
  }
}
new ClientRoutes().defineStandard();

module.exports = router;
