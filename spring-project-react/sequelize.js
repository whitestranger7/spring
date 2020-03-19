const Sequelize = require('sequelize');

module.exports = new Sequelize('spring', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});