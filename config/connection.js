
require('dotenv').config();
const Sequelize = require('sequelize');




const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;
// Above we establish  our connection from values  out of our .env file 