const User =require("./User")
const Job = require("./Job")
const UserJob = require("./UserJob")

User.belongsToMany(Job,{through:UserJob,foreignKey:"userId"})
Job.belongsToMany(User,{through:UserJob,foreignKey:"jobId"})

module.exports={User,Job,UserJob}