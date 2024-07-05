const express = require("express");
const router = express.Router();

const Router = require("../data/adapters/router.adapter");
const BookController = require("../controllers/book.controller");

class BookRoutes extends Router {
  constructor() {
    super(router, "/book");
    this.controller = new BookController();
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
  getByClient() {
    this.router.get(`${this.initialRoute}/client`, (req, res) =>
      this.controller.getByClient(req, res)
    );
  }
  getByDate() {
    this.router.get(`${this.initialRoute}/filter`, (req, res) =>
      this.controller.getByDate(req, res)
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
const routes = new BookRoutes();
routes.defineStandard();
routes.getByClient();
routes.getByDate();
module.exports = router;
