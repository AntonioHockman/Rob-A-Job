const User =require("./User")
const Job = require("./Job")
const Comment = require("./Comment")

Job.hasMany(Comment,{foreignKey:"jobId"})

Comment.belongsTo(Job,{
    foreignKey:"jobId"
})



User.hasMany(Job,{
    foreignKey:"jobId"
})

Job.belongsTo(User,{
    foreignKey:"userId"
})

User.hasMany(Comment,{
    foreignKey:"userId"
})

Comment.belongsTo(User,{
    foreignKey:"userId"
})

module.exports={User,Job,Comment}

