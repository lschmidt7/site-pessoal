const Sequelize = require('sequelize');

const connection = new Sequelize('site','root','', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;