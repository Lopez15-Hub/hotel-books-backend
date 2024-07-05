const Schema = require("../adapters/model.adapter");
const Room = require("../migrations/room.migration");

module.exports = class RoomSchema extends Schema {
  constructor() {
    super(Room);
  }
};
