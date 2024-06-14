const User = require("./User");
const Job = require("./Job");
const Applicant = require("./applicant");
const Comment = require("./Comment");


Job.belongsTo(User, {
  foreignKey: "user_id",
});

// Job belongs to User.

User.hasMany(Job, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
// user  have many job posts


Applicant.belongsTo(Job, {
  foreignKey: "job_id",
});

Job.hasMany(Applicant, {
  foreignKey: "job_id",
  onDelete: "CASCADE",
});


Applicant.belongsTo(User, {
  foreignKey: "user_id",
});


User.hasMany(Applicant, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//comment to job relations below

Job.hasMany(Comment,{
  foreignKey:"job_id" } );

Comment.belongsTo(Job,{
foreignKey:"job_id"
})

//user to comment relation

User.hasMany(Comment,{
  foreignKey:"user_id"
});


Comment.belongsTo(User,{
  foreign_key:"user_id"
});







module.exports = { User, Job, Applicant, Comment};
