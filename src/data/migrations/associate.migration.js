const Client = require("./client.migration");
const Room = require("./room.migration");
const Book = require("./book.migration");

const models = {
  Client,
  Room,
  Book,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});
