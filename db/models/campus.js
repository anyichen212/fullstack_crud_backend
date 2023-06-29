const { DataTypes } = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://www.brooklyn.edu/wp-content/uploads/NEWS-Default-1-Featured.jpg",
    },

});

module.exports = Campus;