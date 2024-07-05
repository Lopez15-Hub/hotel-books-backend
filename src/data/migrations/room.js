const { DataTypes } = require("sequelize");
const { db } = require("../../../db");

const Room = db.define(
  "Room",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    number: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    state: {
      type: DataTypes.STRING,
      values: ["allowed", "filled"],
    },
  },
  {}
);

Room.associate = (models) => {
  Room.hasMany(models.Book, { foreignKey: "roomId" });
};

module.exports = Room;
