const { DataTypes } = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        defaultValue: "N/A",
        validate: {
            notEmpty: true,
        }
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
    zip:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [5,5],
        }
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://www.brooklyn.edu/wp-content/uploads/NEWS-Default-1-Featured.jpg",
        validate: {
            isUrl: true,
        }
    },

});

module.exports = Campus;