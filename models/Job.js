const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Job extends Model {}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company_info: {
      type: DataTypes.STRING,
      allowNull: false,
      //this will hold company name and adress
    },
    position_title: {
      type: DataTypes.STRING,
      allowNull: false,
      //this will hold job title and if remote or in person.
    },
    salary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schedule_info: {
      type: DataTypes.STRING,
      allowNull: false,
      //this will show hours, and if remote or in person
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      //this describes the  expectations for position.
      // text data types are used for longer string values.
    },
    responsibilities: {
      type: DataTypes.TEXT,
      allowNull: false,
      //this will describe the responsibilities for the position
    },
    qualifications: {
      type: DataTypes.TEXT,
      allowNull: false,
      //this will describe the skills and education requirements, and experience level
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "job",
  }
);

module.exports = Job;
