module.exports = class HttpResponse {
  constructor(message = "", success, payload) {
    this.message = message;
    this.success = success;
    this.payload = payload;
  }
};
