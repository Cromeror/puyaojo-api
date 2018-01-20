// Initializes the `perfil` service on path `/perfil`
const createService = require('./perfil.class.js');
const hooks = require('./perfil.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'perfil',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/perfil', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('perfil');

  service.hooks(hooks);
};
