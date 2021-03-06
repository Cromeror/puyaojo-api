// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import Sequelize from 'sequelize'
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const zonificacion = sequelizeClient.define('zonificacion',
    {
      mesa: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true
        }
      }
    });
  zonificacion.associate = function (models) {
    zonificacion.belongsTo(models.puesto)
  }

  return zonificacion
}