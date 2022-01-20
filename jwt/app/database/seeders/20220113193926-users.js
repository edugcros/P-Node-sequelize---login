'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        userName: 'Eduardo Greco',
        password: 'password',
        email: 'edugcross@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
