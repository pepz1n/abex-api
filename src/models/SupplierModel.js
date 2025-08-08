import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Supplier = sequelize.define(
  'supplier',
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
    contactEmail: {
      field: 'contact_email',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Supplier;
