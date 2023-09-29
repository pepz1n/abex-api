import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import PersonAccount from './PersonAccountModel';

const Denunciation = sequelize.define(
  'denunciation',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      unique: false,
      primaryKey: false,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      unique: false,
      primaryKey: false,
      allowNull: true,
    },
    createdUserId: {
      field: "created_user_id",
      type: DataTypes.INTEGER,
      unique: false,
      primaryKey: false,
      allowNull: false,
    },
    responsibleUserId: {
      field: "responsible_user_id",
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

Denunciation.belongsTo(PersonAccount, {
  as: 'PersonAccount',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'createdUserId',
    allowNull: false,
    field: 'id',
  },
});

Denunciation.belongsTo(PersonAccount, {
  as: 'ResponsiblePersonAccount',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'responsibleUserId',
    allowNull: false,
    field: 'id',
  },
});

export default Denunciation;
