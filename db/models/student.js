const { DataTypes } = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quote: {
        type: DataTypes.TEXT,
        defaultValue: "Empty"
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    gpa: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
        validate: {
            min: 0.0,
            max: 4.0,
        }
    },
    campus: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://www.st-andrews.ac.uk/dpl/1.1.0/assets/docs/images/placeholders/200x200.jpg",
        validate: {
            isUrl: true,
        }
    }
    

});

module.exports = Student;