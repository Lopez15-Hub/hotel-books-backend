const Schema = require("../adapters/model.adapter");
const Room = require("../migrations/room");

module.exports = class RoomSchema extends Schema {
  constructor() {
    super(Room);
  }
};
