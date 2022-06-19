'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Products }) {
      this.belongsTo(Users, {foreignKey: 'user_id'})
      this.belongsTo(Products, {foreignKey: 'product_id'})
    }
  }
  Collections.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Collections',
  });
  return Collections;
};
