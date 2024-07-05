module.exports = class Router {
  constructor(router, initialRoute) {
    this.router = router;
    this.initialRoute = initialRoute;
  }
  get() {}
  getOne() {}
  post() {}
  put() {}
  delete() {}
  defineStandard() {
    this.get();
    this.getOne();
    this.post();
    this.put();
    this.delete();
  }
};
