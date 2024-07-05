const SequelizeService = require("./src/data/services/sequelize.service");

const { MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_HOST, MYSQL_PASSWORD } =
  process.env;

const sequelize = new SequelizeService(
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  MYSQL_USER
);
const db = sequelize.sequelize;
module.exports = {
  init: async () => await sequelize.initialize(),
  db,
};
