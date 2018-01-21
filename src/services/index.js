const users = require('./users/users.service.js');
const votantes = require('./votantes/votantes.service.js')
const puestos = require('./puestos/puestos.service.js')
const perfil = require('./perfil/perfil.service.js')
const lideres = require('./lideres/lideres.service')
module.exports = function (app) {
  app.configure(users)
  app.configure(votantes)
  app.configure(puestos)
  app.configure(perfil)
  app.configure(lideres)
};
