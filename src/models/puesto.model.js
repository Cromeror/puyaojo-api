// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const puesto = sequelizeClient.define('puesto', {
    departamento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    municipio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    puesto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mesa: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  puesto.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return puesto;
};
