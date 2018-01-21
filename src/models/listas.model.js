// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
/**
 * Se mantendrá la posibilidad de que un lider pueda tener multiples listas
 * para contemplar cualquier caso futuro.
 * @param {*} app 
 */
module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const listas = sequelizeClient.define('listas',
    {
      nombre: {
        type: DataTypes.STRING
      },
      nota: {
        type: DataTypes.STRING
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });
  listas.associate = function (models) {
    listas.hasMany(models.votantes, { as: 'Votantes' })
  }

  return listas
}