"use strict";
module.exports = function (sequelize, DataTypes) {
  let Argonautes = sequelize.define(
    "Argonautes",
    {
      title: DataTypes.STRING,
    },
    {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        },
      },
    }
  );
  return Argonautes;
};
