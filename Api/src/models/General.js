const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('general', {
  
  
    page: {
      type: DataTypes.INTEGER,
    
    },

    totalPages: {
      type: DataTypes.INTEGER,
     
    },
    totalResults: {
      type: DataTypes.INTEGER,
     
    },

  
   
  });
};
