class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return Promise.resolve(params.user)
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
