module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Departments', [
      {
        name: 'IT',
        description: 'R&D department',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FINANCE',
        description: 'Economic department',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'LEGAL',
        description: 'Lawyers and legal department',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async () => {

  },
};
