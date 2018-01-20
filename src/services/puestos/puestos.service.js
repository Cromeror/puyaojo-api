// Initializes the `puestos` service on path `/puestos`
const createService = require('./puestos.class.js');
const hooks = require('./puestos.hooks');
const createModel = require('../../models/puesto.model');

module.exports = function (app) {
  const paginate = app.get('paginate')
  const Model = createModel(app)

  const options = {
    name: 'puestos',
    paginate,
    models: app.get("sequelizeClient").models
  }

  // Initialize our service with any options it requires
  app.use('/puestos', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('puestos');

  service.hooks(hooks);
};
