const { authenticate } = require('@feathersjs/authentication').hooks
import { Op } from 'sequelize'

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [hook => {
      let query = hook.params.query,
        where = {}
      if (query.puesto)
        where.puesto = { [Op.like]: `%${query.puesto}%` }

      hook.params.where = where
    }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
