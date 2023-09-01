import { DataTypes } from "sequelize";
import { sequelize } from "../config/config";
/*
CREATE TABLE institution(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    document_number VARCHAR(18) NOT NULL,
    address_id INTEGER,
    CONSTRAINT fk_address_to_institution FOREIGN KEY(address_id) REFERENCES address(id)
);
*/

const Institution = sequelize.define(
    'institution',
    {
        id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
        name: {
			type: DataTypes.STRING,
            unique: false, 
			primaryKey: false,
            allowNull: false
		},
        document_number: {
			type: DataTypes.STRING,
            unique: false, 
			primaryKey: false,
            allowNull: false
        },
        address_id: {
			type: DataTypes.INTEGER,
            unique: false, 
			primaryKey: false,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
		timestamps: true,
    }
);

Institution.belongsTo(  Category, {
    as: 'Category',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
      name: 'idCategory',
      allowNull: false,
      field: 'id_Category'
    }
  })

export default BaseModel;