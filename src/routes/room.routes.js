const express = require("express");
const router = express.Router();

const Router = require("../data/adapters/router.adapter");
const RoomController = require("../controllers/room.controller");

class RoomRoutes extends Router {
  constructor() {
    super(router, "/room");
    this.controller = new RoomController();
  }

  getByStatus() {
    this.router.get(`${this.initialRoute}/allowed`, (req, res) =>
      this.controller.getByStatus(req, res)
    );
  }
  get() {
    this.router.get(this.initialRoute, (req, res) =>
      this.controller.getAll(req, res)
    );
  }
  getOne() {
    this.router.get(`${this.initialRoute}/find`, (req, res) =>
      this.controller.getOne(req, res)
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
const routes = new RoomRoutes();
routes.defineStandard();
routes.getByStatus();

module.exports = router;
