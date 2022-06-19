'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Categories', [
      { name: 'Vegies', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fruits', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Meat', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fish', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sweets', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Drinks', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dairy', createdAt: new Date(), updatedAt: new Date() },
  ], {});

  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
