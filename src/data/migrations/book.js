const { DataTypes } = require("sequelize");
const { db } = require("../../../db");

const Book = db.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clientId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Client",
        key: "id",
      },
    },
    roomId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Room",
        key: "id",
      },
    },
    onBoardingDate: {
      type: DataTypes.DATE,
    },
  },
  {}
);

Book.associate = (models) => {
  Book.belongsTo(models.Client, { as: "client", foreignKey: "clientId" });
  Book.belongsTo(models.Room, { as: "room", foreignKey: "roomId" });
};

module.exports = Book;
