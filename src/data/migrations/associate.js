const Client = require("./client");
const Room = require("./room");
const Book = require("./book");

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
