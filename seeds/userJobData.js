const { UserJob } = require('../models');

const userJobData = [
  {
    user_id: 1,
    job_id: 1,
  },
  {
    user_id: 2,
    job_id: 1,
  },
  {
    user_id: 3,
    job_id: 3,
  },
  {
    user_id: 4,
    job_id: 2,
  },
  {
    user_id: 5,
    job_id: 2,
  }
  
];

const seedUserJobData = () => ProductTag.bulkCreate(userJobData);