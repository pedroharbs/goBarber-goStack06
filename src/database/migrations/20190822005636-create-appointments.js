'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE', // Toda vez que o iD altera, irá alterar aqui imediatamente
        onDelete: 'CASCADE', // Toda vez que um usuário for removido, remove-se todos os agendamentos
        allowNull: false
      },
      provider_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE', // Toda vez que o iD altera, irá alterar aqui imediatamente
        onDelete: 'CASCADE', // Toda vez que um usuário for removido, remove-se todos os agendamentos
        allowNull: false
      },
      created_at: {

        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {

        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('appointments')
  }
}
