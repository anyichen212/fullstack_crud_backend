const { Sequelize } = require("sequelize");

require('dotenv').config();

const db = new Sequelize(`postgres://${process.env.USER}:${process.env.PASS}@localhost:5432/ttpCrudData`, {
    logging: false,
});

module.exports = db;