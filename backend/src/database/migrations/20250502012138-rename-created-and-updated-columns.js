'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('usuarios', 'created_at', 'createdAt');
    await queryInterface.renameColumn('usuarios', 'updated_at', 'updatedAt');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('usuarios', 'createdAt', 'created_at');
    await queryInterface.renameColumn('usuarios', 'updatedAt', 'updated_at');
  }
};
