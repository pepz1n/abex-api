import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Institution from './InstitutionModel';

const Contact = sequelize.define(
  'contact',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(15),
      unique: false,
      primaryKey: false,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING(100),
      unique: true,
      primaryKey: false,
      allowNull: false,
    },
    institutionId: {
      field: 'institution_id',
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

Contact.belongsTo(Institution, {
  as: 'Institution',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'institutionId',
    allowNull: false,
    field: 'id',
  },
});

export default Contact;
