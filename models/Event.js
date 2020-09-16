const { Sequelize, DataTypes, Model } = require('sequelize');
var sequelize = require("../db");

class Event extends Model {}

Event.init({
  // Model attributes are defined here
  day: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'Event' // We need to choose the model name
});

module.exports.Event = Event;