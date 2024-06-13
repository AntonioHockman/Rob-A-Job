const sequelize = require('../config/connection');
const { User, Job, Comment} = require('../models');
const seedCommentData = require("./commentData");
const seedUserData = require('./userData');
const seedJobData = require('./jobData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUserData();
  await seedJobData();
  await seedCommentData();

  process.exit(0);
};

seedDatabase();
