import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Institution from './InstitutionModel';

const PersonAccount = sequelize.define(
  'person_account',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    username: {
      type: DataTypes.STRING(50),
      unique: true,
      primaryKey: false,
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING(256),
      unique: false,
      primaryKey: false,
      allowNull: false,
    },
    institution_id: {
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

PersonAccount.belongsTo(Institution, {
  as: 'Institution',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'institution_id',
    allowNull: false,
    field: 'id',
  },
});

export default PersonAccount;
