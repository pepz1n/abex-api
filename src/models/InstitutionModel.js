import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Address from './AddressModel';

const Institution = sequelize.define(
  'institution',
  {
    // Por algum motivo de deus essa tabela da erro, pq ele nao reconhece o id como o PK mas sim o 'institution_id'
    institution_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING(100),
      unique: false,
      primaryKey: false,
      allowNull: false,
    },
    document_number: {
      type: DataTypes.STRING(18),
      unique: true,
      primaryKey: false,
      allowNull: false,
    },
    address_id: {
      type: DataTypes.INTEGER,
      unique: false,
      primaryKey: false,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Institution.belongsTo(Address, {
  as: 'Address',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'address_id',
    allowNull: false,
    field: 'id',
  },
});

export default Institution;
