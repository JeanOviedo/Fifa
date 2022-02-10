const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("teams", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            promaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allownull: false
        },

    });
};
