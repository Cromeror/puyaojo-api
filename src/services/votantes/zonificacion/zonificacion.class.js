import { names as modelsNames } from '../../../utils/models.utils'
import FeathersErrors from '@feathersjs/errors'

class Service {
  constructor(options) {
    this.options = options || {};
    this.models = this.options.models || {}
  }

  find(params) {
    return this.models[modelsNames.zonificacion].findAll()
  }

  update(id, data, params) {
    return this.models[modelsNames.votantes]
      .findOne({ where: { id: params.route.votanteId } })
      .then(votante => {
        if (!votante)
          throw new FeathersErrors.BadRequest('El votante que intenta zonificar no existe')

        return this.models[modelsNames.puesto]
          .findOne({ where: { id: data.puestoId } })
          .then(puesto => {
            if (!puesto)
              throw new FeathersErrors.BadRequest('El puesto de votación no existe')

            return this.models[modelsNames.zonificacion]
              .update(data, { where: { votanteId: params.route.votanteId } })
          })
      })
  }
}

module.exports = function (options) {
  return new Service(options)
}

module.exports.Service = Service
