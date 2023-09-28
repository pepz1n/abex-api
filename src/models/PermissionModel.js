import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import PersonAccount from './PersonAccountModel';

const Permission = sequelize.define(
  'permission',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    solution: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },

  {
    freezeTableName: true,
    timestamps: false,
  },

);

Permission.belongsTo(PersonAccount, {
  as: 'personAccount',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'personAccountId',
    allowNull: false,
    field: 'person_account_id',
  },
});

export default Permission;
