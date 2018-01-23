import createService from './votantes.class.js'
import hooks from './votantes.hooks'
import createModel from '../../models/votantes.model'
//Sub-recursos
import zonificacion from './zonificacion/zonificacion.service'

module.exports = function (app) {
  const paginate = app.get('paginate')
  const Model = createModel(app)

  const options = {
    name: 'votantes',
    paginate,
    models: app.get("sequelizeClient").models
  }
  //Sub recursos
  app.configure(zonificacion)

  // Initialize our service with any options it requires
  app.use('/votantes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('votantes');

  service.hooks(hooks);
};
