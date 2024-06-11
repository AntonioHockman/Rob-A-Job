const { Model, DataTypes, DECIMAL } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class JobComment extends Model {}

JobComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    commentId:{
        type:DataTypes.INTEGER,
        references:{model:"comment",key:"id"}
    },
    jobId:{
        type:DataTypes.INTEGER,
        references:{model:"job",key:"id"}
    },
   },
  {
    hooks: {
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userjob',
  }
);

module.exports = JobComment;
