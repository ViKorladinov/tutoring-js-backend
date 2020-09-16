const { Sequelize } = require("sequelize");
const connectionString = "postgres://postgres:1234@localhost:5432/mypsqldb";

module.exports = new Sequelize(connectionString);
