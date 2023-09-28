import { DataTypes } from "sequelize";
import { sequelize } from "../config/config";

const Field = sequelize.define(
    'field',
    {
        id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
        name: {
			type: DataTypes.STRING(40),
            unique: false, 
			primaryKey: false,
            allowNull: false
		},
        type: {
			type: DataTypes.STRING(40),
            unique: false, 
			primaryKey: false,
            allowNull: true,
        },
        options: {
			type: DataTypes.JSON,
            unique: false, 
			primaryKey: false,
            allowNull: true
        },
        status: {
			type: DataTypes.BOOLEAN,
            unique: false, 
			primaryKey: false,
            allowNull: true,
        },
        higher: {
			type: DataTypes.INTEGER,
            unique: false, 
			primaryKey: false,
            allowNull: true
        }
    },
    {
        freezeTableName: true,
		timestamps: false,
    }

)

Field.belongsTo(  Field, {
    as: 'field_to_field',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
      name: 'higher',
      allowNull: false,
      field: 'id'
    }
})


export default Field;


