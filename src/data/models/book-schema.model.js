const Schema = require("../adapters/model.adapter");
const Book = require("../migrations/book.migration");

module.exports = class BookSchema extends Schema {
  constructor() {
    super(Book);
  }
};
