const express = require("express");

class ExpressService {
  constructor(port = 5070) {
    this.app = express();
    this.port = port;
  }
  registerMiddlewares(resources) {
    resources.map((resource) => this.app.use(resource));
  }
  registerRoute(path, resource) {
    this.app.use(path, resource);
  }
  initialize() {
    this.app.listen(this.port, () =>
      console.log(`Server running on ${this.port}`)
    );
  }
}

module.exports = ExpressService;
