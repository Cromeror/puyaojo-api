const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const votantes = sequelizeClient.define('votantes',
    {

      cedula: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      apellido: {
        type: DataTypes.STRING
      },
      telefono: {
        type: DataTypes.STRING
      },
      celular: {
        type: DataTypes.STRING
      },
      direccion: {
        type: DataTypes.STRING
      },
      correo: {
        type: DataTypes.STRING
      },


    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true
        }
      }
    })

  votantes.associate = function (models) {
    votantes.belongsTo(models.zonificacion)
  }

  return votantes
}
