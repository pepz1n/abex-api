import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import DenunciationModel from './DenunciationModel';
import Field from './FieldModel';

const ResponseField = sequelize.define(
  'response_field',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

ResponseField.belongsTo(Field, {
  as: 'field',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'fieldId',
    field: 'field_id',
    allowNull: false,
  },
});

ResponseField.belongsTo(DenunciationModel, {
  as: 'denunciation',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'denunciationId',
    field: 'denunciation_id',
    allowNull: false,
  },
});

export default ResponseField;
