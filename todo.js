import { Model, DataTypes } from "sequelize";
import sequelize from "./sequelize"

class Todo extends Model { }

Todo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    sequelize,
    freezeTableName: true,
    timeStamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
});

export default Todo;