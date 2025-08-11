import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Supplier from './SupplierModel';

const Product = sequelize.define(
  'product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    supplierId: {
      field: 'supplier_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Product.belongsTo(Supplier, {
  as: 'Supplier',
  foreignKey: { name: 'supplier_id', allowNull: false },
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
});

export default Product;
