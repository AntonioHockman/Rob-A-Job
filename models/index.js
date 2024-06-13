const User = require("./User");
const Job = require("./Job");
const Applicant = require("./Applicant");


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







module.exports = { User, Job, Applicant };
