import { names as modelsNames } from '../../utils/models.utils'
import Sequelize from 'sequelize'
const Op = Sequelize.Op
class Service {
  constructor(options) {
    this.options = options || {};
    this.models = this.options.models || {}
  }

  find(params) {
    return this.models[modelsNames.puesto]
      .findAll({
        where: params.where
      })
  }

  get(id, params) {
    return this.models[modelsNames.puesto].findOne({ where: { id } })
  }

  /**
   * Permite insertar en bulk
   * @param {*} data 
   * @param {*} params 
   */
  create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }
    return this.models[modelsNames.puesto]
      .create(data)
  }

  update(id, data, params) {
    return this.models[modelsNames.puesto].update(data, { where: { id } })
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
