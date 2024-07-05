const Controller = require("../data/adapters/controller.adapter");
const BookSchema = require("../data/models/book-schema.model");
const HttpResponse = require("../data/models/http/http-response.model");
const ServerError = require("../data/models/http/http-server-error.model");
const Client = require("../data/migrations/client");
const Room = require("../data/migrations/room");
const { Op } = require("sequelize");

module.exports = class BookController extends Controller {
  constructor() {
    super(new BookSchema());
  }

  async getByClient(req, res) {
    const { clientId } = req.query;
    try {
      const results = await this.schema.readAll({
        where: {
          clientId,
        },
        include: [
          {
            model: Client,
            as: "client",
            attributes: ["id", "name", "email", "phone"],
          },
          {
            model: Room,
            as: "room",
            attributes: ["id", "number", "type", "price", "state"],
          },
        ],
      });
      return res
        .status(200)
        .json(new HttpResponse(`Data retrieved Successfully`, true, results));
    } catch (error) {
      return res
        .status(500)
        .json(new ServerError(false, "Internal server error"));
    }
  }
  async getByDate(req, res) {
    const { from, to } = req.query;
    try {
      const results = await this.schema.readAll({
        where: {
          onBoardingDate: {
            [Op.gte]: from,
            [Op.lte]: to,
          },
        },
        include: [
          {
            model: Client,
            as: "client",
            attributes: ["id", "name", "email", "phone"],
          },
          {
            model: Room,
            as: "room",
            attributes: ["id", "number", "type", "price", "state"],
          },
        ],
      });
      return res
        .status(200)
        .json(new HttpResponse(`Data retrieved Successfully`, true, results));
    } catch (error) {
      return res
        .status(500)
        .json(new ServerError(false, "Internal server error"));
    }
  }
};
