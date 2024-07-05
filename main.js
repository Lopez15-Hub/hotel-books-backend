const ExpressService = require("./src/data/services/express.service.js");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const bookRoutes = require("./src/routes/book.routes.js");
const clientRoutes = require("./src/routes/client.routes.js");
const roomRoutes = require("./src/routes/room.routes.js");
const { init } = require("./db.js");

const main = async () => {
  await init();
  require("./src/data/migrations/associate");
  const express = new ExpressService(process.env.PORT);
  express.initialize();
  express.registerMiddlewares([cors(), morgan(), require("express").json()]);
  express.registerRoute("/api/v1/", bookRoutes);
  express.registerRoute("/api/v1/", roomRoutes);
  express.registerRoute("/api/v1/", clientRoutes);
};
main();
