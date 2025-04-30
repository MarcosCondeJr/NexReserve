'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('usuarios', {
      id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nm_usuario: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      email_usuario: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      senha_usuario: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      tp_usuario: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    })
  },

  async down (queryInterface, Sequelize) {

  }
};
