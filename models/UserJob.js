const { Model, DataTypes, DECIMAL } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class UserJob extends Model {}

UserJob.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId:{
        type:DataTypes.INTEGER,
        references:{model:"user",key:"id"}
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

module.exports = UserJob;
