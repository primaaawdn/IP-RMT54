'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReadingList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReadingList.belongsTo(models.User);
    }
  }
  ReadingList.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'userId'
      }
    },
    mangaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: DataTypes.STRING,
    progress: DataTypes.INTEGER,
    userRating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReadingList',
  });
  return ReadingList;
};