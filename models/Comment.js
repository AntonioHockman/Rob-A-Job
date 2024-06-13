const { Model, DataTypes, DECIMAL } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      comment_text:{
        type: DataTypes.STRING,
        allowNull:true,
      },
      comment_text:{
        type:DataTypes.TEXT,
        allowNull:false,
      },
      job_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'job',
            key: 'id',
          },
      }
    },
{
    hooks: {
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;