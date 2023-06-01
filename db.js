// db.js
const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.development);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
