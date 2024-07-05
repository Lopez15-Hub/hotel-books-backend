const Controller = require("../data/adapters/controller.adapter");
const HttpResponse = require("../data/models/http/http-response.model");
const ServerError = require("../data/models/http/http-server-error.model");
const RoomSchema = require("../data/models/room-schema.model");

module.exports = class RoomController extends Controller {
  constructor() {
    super(new RoomSchema());
  }
  async getByStatus(req, res) {
    try {
      const results = await this.schema.readAll({
        where: {
          state: "allowed",
        },
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
