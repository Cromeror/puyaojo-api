/* eslint-disable no-unused-vars */
class Service {
  constructor(options) {
    this.options = options || {};
    this.models = this.options.models || {}
  }

  find(params) {
    return this.models['puesto'].findAll()
  }
  /* 
    get(id, params) {
      return Promise.resolve({
        id, text: `A new message with ID: ${id}!`
      });
    } */

  /**
   * Permite insertar en bulk
   * @param {*} data 
   * @param {*} params 
   */
  create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }
    return this.models['puesto']
      .create(data)
  }

  update(id, data, params) {
    return this.models['puesto'].update(data, { where: { id } })
  }

  /* 
    patch(id, data, params) {
      return Promise.resolve(data);
    }
  
    remove(id, params) {
      return Promise.resolve({ id });
    } */
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
