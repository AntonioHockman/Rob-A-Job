const User = require("./User");
const Job = require("./Job");
const Applicant = require("./applicant");
const Comment = require("./Comment");


Job.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Job belongs to User relation 

User.hasMany(Job, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
// user  have many job posts relation 


Applicant.belongsTo(Job, {
  foreignKey: "job_id",
  onDelete: "CASCADE",
});

// Applicant belongs to job relation 

Job.hasMany(Applicant, {
  foreignKey: "job_id",
  onDelete: "CASCADE",
});


// Job has many applicants relation 


Applicant.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});


// Applicant belongs to user relation 

User.hasMany(Applicant, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//user has many applicants relation 

Job.hasMany(Comment,{
  foreignKey:"job_id",
  onDelete: "CASCADE"
});

// job has many comments relation 


Comment.belongsTo(Job,{
foreignKey:"job_id",
onDelete: "CASCADE"
})

//comment belongs to user relation 

User.hasMany(Comment,{
  foreignKey:"user_id",
  onDelete: "CASCADE"
});


Comment.belongsTo(User,{
  foreign_key:"user_id",
  onDelete: "CASCADE"
});







module.exports = { User, Job, Applicant, Comment};
