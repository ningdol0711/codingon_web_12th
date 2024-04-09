'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      userID: 1,
      name: 'John Doe',
      engName: 'Lee',
      createdAt: '2024-04-09',
      updatedAt: '2024-04-09',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};