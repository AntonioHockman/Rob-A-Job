const { User } = require('../models');
// Above, we import the user model in order to create entries in it.

const userdata = [
  {
    // user 1
    first_name: "Sal",
    last_name: "Hunter",
    email: "sal@hotmail.com",
    password: "passwo1343"
  },

  {
    // user 2
    first_name: "Lernantino",
    last_name: "steven",
    email: "lernantino@gmail.com",
    password: "passwod292%"
  },


 {
    // user 3
    first_name:  "Amiko",
    last_name: "Riley",
    email: "amiko2k20@aol.com",
    password: "passyqawy!"
  },


  {
    // user 4
    first_name:  "Jordan",
    last_name: "Adam",
    email: "jordan99@msn.com",
    password: "password27192@!"
  },


  {
    // user 5
    first_name:  "Blake",
    last_name: "Gilipse",
    email: "the_blake@yahoo.com",
    password: "pa2392042$%"
  },
  {
    // user 6
    first_name:"Gary",
    last_name:"Tyler",
    email:"adhockman7@gmail.com",
    password:"whoa!itsabird"
  },
  {
    // user 7
    first_name:"Alex",
    last_name:"Perez",
    email:"perez5@yahoo.com",
    password:"noitsaplane!"
  },
  {
    // user 8
  first_name:"Clark",
  last_name:"Kent",
    email:"dailybugal@yahoo.com",
    password:"no!itsSuperman!"
},
  {
    //user 9
    first_name:"Carlos",
    last_name:"Carlos",
    email:"carcar@yahoo.com",
    password:"mywordisaPASS"
  },
  {
    //user 10
    first_name:"Daniel",
    last_name:"Cormierr",
    email:"Jared",
    password:"myPWisunique"
  },
  {
    //user 11
    first_name:"George",
    last_name:"Lopez",
    email:"lopez7@yahoo.com",
    password:"myshowwasgood"
  },
  {
    //user 12
    first_name:"Alis",
    last_name:"Jovel",
    email:"alis888@gmail.com",
    password:"myPWistheBEST"
  }






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

