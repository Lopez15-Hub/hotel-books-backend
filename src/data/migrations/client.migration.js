const { DataTypes } = require("sequelize");
const { db } = require("../../../db");

const Client = db.define(
  "Client",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {}
);

Client.associate = (models) => {
  Client.hasMany(models.Book, { foreignKey: "clientId" });
};

module.exports = Client;
