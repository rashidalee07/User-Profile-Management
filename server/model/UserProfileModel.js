const sequelize = require("./../sequelizeConfig");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const UserProfile = sequelize.define(
  "UserProfile",
  {
    profile_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
    hooks: {
      beforeCreate: async (user) => {
        // Hash the password before creating the user
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
      },
    },
  }
);

// Define comparePassword as an instance method using prototype
UserProfile.prototype.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

UserProfile.sync({ alter: true })
  .then(() => console.log("Table and model synced successfully"))
  .catch((error) => console.error("Error syncing the table and model:", error));

module.exports = UserProfile;
