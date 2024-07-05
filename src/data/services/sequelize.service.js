const { Sequelize } = require("sequelize");
module.exports = class SequelizeService {
  constructor(host, port, database, password, user) {
    this.sequelize = new Sequelize({
      dialect: "mysql",
      host,
      port,
      database,
      password,
      username: user,
    });
  }
  async initialize() {
    await this.sequelize.authenticate();
    await this.sequelize.sync();
  }
};
 
