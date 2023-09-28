import { DataTypes } from "sequelize";
import { sequelize } from "../config/config";
import PersonAccount from "./PersonAccountModel";

const Denunciation = sequelize.define(
    'denunciation',
    {
        id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
        date: {
			type: DataTypes.DATEONLY,
            unique: false, 
			primaryKey: false,
            allowNull: false
		},
        status: {
			type: DataTypes.BOOLEAN,
            unique: false, 
			primaryKey: false,
            allowNull: true,
        },
        created_user_id: {
			type: DataTypes.INTEGER,
            unique: false, 
			primaryKey: false,
            allowNull: false
        },
        responsible_user_id: {
			type: DataTypes.INTEGER,
            unique: false, 
			primaryKey: false,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
		timestamps: false,
    }

)

Denunciation.belongsTo(  PersonAccount, {
    as: 'PersonAccount',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
      name: 'created_user_id',
      allowNull: false,
      field: 'id'
    }
})

Denunciation.belongsTo(  PersonAccount, {
    as: 'ResponsiblePersonAccount',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
      name: 'responsible_user_id',
      allowNull: false,
      field: 'id'
    }
})

export default Denunciation;
