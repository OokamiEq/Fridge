'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Categories }) {
      this.belongsTo(Categories, { foreignKey: 'category_id' })
    }
  }
  Products.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
