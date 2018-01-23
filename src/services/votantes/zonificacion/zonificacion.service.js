// Initializes the `puestos` service on path `/puestos`
import createService from './zonificacion.class.js'
import hooks from './zonificacion.hooks'
import createModel from '../../../models/zonificacion.model'

module.exports = function (app) {
  const paginate = app.get('paginate')
  const Model = createModel(app)

  const options = {
    name: 'zonificacion',
    paginate,
    models: app.get("sequelizeClient").models
  }

  // Initialize our service with any options it requires
  app.use('/votantes/:votanteId/zonificacion', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('votantes/:votanteId/zonificacion')

  service.hooks(hooks)
}