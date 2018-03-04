'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    discription: DataTypes.TEXT
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};