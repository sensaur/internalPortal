module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Teams', [
      {
        name: 'Team 1',
        description: 'Market expansion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Team 2',
        description: 'Lead generation',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Team 3',
        description: 'Cost optimization',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async () => {
  },
};
