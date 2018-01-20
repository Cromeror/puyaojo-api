// Initializes the `votantes` service on path `/votantes`
const createService = require('./votantes.class.js');
const hooks = require('./votantes.hooks');
const createModel = require('../../models/votantes.model');

module.exports = function (app) {
  const paginate = app.get('paginate')
  const Model = createModel(app)

  const options = {
    name: 'votantes',
    paginate,
    models: app.get("sequelizeClient").models
  };

  // Initialize our service with any options it requires
  app.use('/votantes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('votantes');

  service.hooks(hooks);
};
