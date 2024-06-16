const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const argon2 = require('argon2');

// Above, are our requried impots for this model
// We use argon 2 instead of bycrypt 


class User extends Model {

  checkPassword(loginPw) {
    return argon2.verify(this.password, loginPw);
  }

}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
        // Above, Password has a min length of 8
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await argon2.hash(user.password);
        return user;
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          user.password = await argon2.hash(user.password);
          return user;
        }
      },
    },
    // Above, are hooks used to has the pw before creating.
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
