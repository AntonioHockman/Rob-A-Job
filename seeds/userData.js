const { User } = require('../models');

const userdata = [
  {
    // "name": "Sal",
    // "role":"applicant",
    //"company_name": "",
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    // "name": "Lernantino",
    // "role":"company",
    // "company_name":"Monash University",
    "email": "lernantino@gmail.com",
    "password": "password12345"
  },
  {
    // "name": "Amiko",
    // "role":"company",
    // "company_name":"Beavercreek Marketing",
    "email": "amiko2k20@aol.com",
    "password": "password12345"
  },
  {
  //   "name": "Jordan",
    //"company_name":"",
    "email": "jordan99@msn.com",
    "password": "password12345"
  },
  {
    // "name": "Blake",
    // "company_name":"",
    "email": "the_blake@yahoo.com",
    "password": "password12345"
  }
]
const seedUser = () => User.bulkCreate(userdata);

module.exports = User;


