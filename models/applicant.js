const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// Above, are the imports we need for this module

class applicant extends Model {}

applicant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },


    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
        // Above, is a foriegn key to a job post 
      },
    },

    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "job_posts",
        key: "id",
        // Above, is a foriegn key to a job post 
      },
    },









  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "applicant",
  }
);

module.exports = applicant;
// Above, we export the model 