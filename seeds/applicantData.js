const { Applicant } = require('../models');
// Above we impot the model 

const applicantData = [
  {
    user_id: 2,
    job_id: 3
  },

 
  {
    user_id: 2,
    job_id: 1
  },


  {
    user_id: 2,
    job_id: 2
  },


  {
    user_id: 4,
    job_id: 1
  },


  {
    user_id: 4,
    job_id: 3
  },

  {
    user_id: 4,
    job_id: 2
    
  },


  
];
// Above is our seeds inputs

const seedapplicantData = () => Applicant.bulkCreate(applicantData);
// ABove is our function to bulk create inputs into the applicant table.


module.exports = seedapplicantData;
// Above is our exported bulk create function 