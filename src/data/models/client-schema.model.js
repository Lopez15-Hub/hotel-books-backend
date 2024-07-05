const Schema = require("../adapters/model.adapter");
const Client = require("../migrations/client.migration");

module.exports = class ClientSchema extends Schema {
  constructor() {
    super(Client);
  }
};
