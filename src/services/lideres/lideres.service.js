// Initializes the `votantes` service on path `/votantes`
const createService = require('./lideres.class.js');
const hooks = require('./lideres.hooks');
const createModel = require('../../models/lideres.model');
/**Sub-resources */
const listas = require('./listas/listas.service')

module.exports = function (app) {
  const paginate = app.get('paginate')
  const Model = createModel(app)

  const options = {
    name: 'lideres',
    paginate,
    models: app.get("sequelizeClient").models
  }
  //Subservices
  app.configure(listas);
  // Initialize our service with any options it requires
  app.use('/lideres', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('lideres');

  service.hooks(hooks);
};
