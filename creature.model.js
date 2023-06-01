// creature.model.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');

const Creature = sequelize.define('Creature', {
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nefturianId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Creature;
