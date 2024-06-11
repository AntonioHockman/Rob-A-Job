const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedJob();

  process.exit(0);
};

seedDatabase();
