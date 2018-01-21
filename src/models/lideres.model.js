// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const lideres = sequelizeClient.define('lideres',
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
      email: {
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

  lideres.associate = function (models) {
    lideres.hasMany(models.listas, { as: 'Listas' })
  }

  return lideres;
};
