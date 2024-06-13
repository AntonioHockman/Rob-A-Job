const User = require("./User");
const jobPosts = require("./jobpost");
const applicant = require("./applicant");


jobPosts.belongsTo(User, {
  foreignKey: "user_id",
});

// jobPosts belongs to User.

User.hasMany(jobPosts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
// user  have many job posts


applicant.belongsTo(jobPosts, {
  foreignKey: "job_id",
});

jobPosts.hasMany(applicant, {
  foreignKey: "job_id",
  onDelete: "CASCADE",
});


applicant.belongsTo(User, {
  foreignKey: "user_id",
});


User.hasMany(applicant, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});







module.exports = { User, jobPosts, applicant };
