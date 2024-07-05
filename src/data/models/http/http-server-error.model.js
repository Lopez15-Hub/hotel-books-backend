module.exports = class ServerError {
  constructor(success, message) {
    this.success = success;
    this.message = message;
  }
};
