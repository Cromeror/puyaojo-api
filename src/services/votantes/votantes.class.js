import { names as modelsNames } from '../../utils/models.utils'
class Service {
  constructor(options) {
    this.options = options || {}
    this.models = this.options.models || {}
  }

  find(params) {
    return this.models[modelsNames.votantes]
      .findAll({
        include: [{
          model: this.models[modelsNames.zonificacion],
          include: [{
            model: this.models[modelsNames.puesto]
          }]
        }]
      })
  }

  get(id, params) {
    return this.models[modelsNames.votantes].findOne({ where: { id } })
  }

  create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }
    return this.models[modelsNames.votantes]
      .create(data,
      {
        include: [
          {
            model: this.models[modelsNames.zonificacion]
          }
        ]
      })
  }

  update(id, data, params) {
    return this.models[modelsNames.votantes].update(data, { where: { id } })
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
