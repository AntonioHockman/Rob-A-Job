const { User } = require('../models');
// Above, we import the user model in order to create entries in it.

const userdata = [
  {
    first_name: "Sal",
    last_name: "Hunter",
    email: "sal@hotmail.com",
    password: "passwo1343"
  },

  {
    first_name: "Lernantino",
    last_name: "steven",
    email: "lernantino@gmail.com",
    password: "passwod292%"
  },


 {
    first_name:  "Amiko",
    last_name: "Riley",
    email: "amiko2k20@aol.com",
    password: "passyqawy!"
  },


  {
    first_name:  "Jordan",
    last_name: "Adam",
    email: "jordan99@msn.com",
    password: "password27192@!"
  },


  {
    first_name:  "Blake",
    last_name: "Gilipse",
    email: "the_blake@yahoo.com",
    password: "pa2392042$%"
  },



]

async function seedUser() {
  await User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });
  // individual hooks must be set to true when using hooks for buk create.
  // return true returns you that updated data.
  // last, seed user is a function we export to seed our db in index.js
}
module.exports = seedUser;
// Above, we export seedUser

