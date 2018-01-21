// Initializes the `votantes` service on path `/votantes`
const createService = require('./listas.class.js');
const hooks = require('./listas.hooks');
const createModel = require('../../../models/listas.model');

module.exports = function (app) {
  const paginate = app.get('paginate')
  const Model = createModel(app)

  const options = {
    name: 'listas',
    paginate,
    models: app.get("sequelizeClient").models
  }

  // Initialize our service with any options it requires
  app.use('/listas', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('listas');

  service.hooks(hooks);
};
