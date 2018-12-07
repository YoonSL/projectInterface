module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 17]
      }
    },
    ship: {
      type: DataTypes.INTEGER,
      allowNull: true,
      min: 0,
      max: 5
    }
  });
  return User;
};
