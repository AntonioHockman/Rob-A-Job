const { User } = require('../models');

const userdata = [
  {
    
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {

    "email": "lernantino@gmail.com",
    "password": "password12345"
  },
  {
   
    "email": "amiko2k20@aol.com",
    "password": "password12345"
  },
  {

    "email": "jordan99@msn.com",
    "password": "password12345"
  },
  {
   
    "email": "the_blake@yahoo.com",
    "password": "password12345"
  }
]
const seedUserData = () => User.bulkCreate(userdata);

module.exports = seedUserData;


