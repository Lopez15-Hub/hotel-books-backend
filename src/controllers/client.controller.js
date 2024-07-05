const Controller = require("../data/adapters/controller.adapter");
const ClientSchema = require("../data/models/client-schema.model");

module.exports = class ClientController extends Controller {
  constructor() {
    super(new ClientSchema());
  }
};
