'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      start_date: {
        type: Sequelize.DATE, defaultValue: Sequelize.NOW
      },
      end_date: {
        type: Sequelize.DATE, defaultValue: Sequelize.NOW
      },
      discription: {
        type: Sequelize.TEXT
      },
      createdAt: false,
      
      updatedAt:false
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};
