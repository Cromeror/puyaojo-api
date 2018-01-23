import users from './users/users.service.js'
import votantes from './votantes/votantes.service.js'
import puestos from './puestos/puestos.service.js'
import perfil from './perfil/perfil.service.js'
import lideres from './lideres/lideres.service'
import zonificacion from './zonificacion/zonificacion.service'

module.exports = function (app) {
  app.configure(users)
  app.configure(votantes)
  app.configure(puestos)
  app.configure(perfil)
  app.configure(lideres)
  app.configure(zonificacion)
};
