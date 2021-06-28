const Sequelize = require('sequelize');

const connection = new Sequelize('site','leo','12345', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;