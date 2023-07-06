const { Sequelize } = require("sequelize");

require('dotenv').config();

const { Pool } = require("pg");

//const Pool = new Pool({
//  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
//})

const db = new Sequelize(`${process.env.POSTGRES_URL}?sslmode=require`, {
    logging: false,
    dialect : require('pg'),
});

module.exports = db;