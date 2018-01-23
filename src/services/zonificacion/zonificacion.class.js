import { names as modelsNames } from '../../utils/models.utils'
import FeathersErrors from '@feathersjs/errors'

class Service {
  constructor(options) {
    this.options = options || {};
    this.models = this.options.models || {}
  }

  find(params) {
    return this.models[modelsNames.zonificacion].findAll()
  }

  get(id, params) {
    return this.models[modelsNames.zonificacion]
      .findOne({ where: { id } })
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

    return this.models[modelsNames.zonificacion]
      .findOne({ where: { votanteId: data.votanteId } })
      .then(votante => {
        if (votante)
          throw new FeathersErrors.Conflict('El votante ya se encuentra zonificado, use el metodo Update para actualizar la información')

        return Promise.all([
          this.models[modelsNames.votantes].findOne({ where: { id: data.votanteId } }),
          this.models[modelsNames.puesto].findOne({ where: { id: data.puestoId } })
        ])
          .then(responses => {
            let votante = responses[0],
              puesto = responses[1],
              errors = []

            if (!votante)
              errors.push('El vontante ingresado no se encuentra registrado')
            if (!puesto)
              errors.push('El puesto de votación no existe')
            if (errors.length > 0) {
              throw new FeathersErrors.BadRequest('No se pudo completar la operación', { errors })
            }

            return this.models[modelsNames.zonificacion]
              .create(data)
          })
      })
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
  return new Service(options)
}

module.exports.Service = Service
