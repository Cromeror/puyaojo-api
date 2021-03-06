import { names as modelsNames } from '../../utils/models.utils'

class Service {
  constructor(options) {
    this.options = options || {}
    this.models = this.options.models || {}
    //console.log(names)
  }

  find(params) {
    return this.models[modelsNames.votantes]
      .findAll()
  }
  /* 
    get(id, params) {
      return Promise.resolve({
        id, text: `A new message with ID: ${id}!`
      });
    } */

  create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }
    return this.models['modelsNames.']
      .create(data)
  }
  /* 
    update(id, data, params) {
      return Promise.resolve(data);
    }
  
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
