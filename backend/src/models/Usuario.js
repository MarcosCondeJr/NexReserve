const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Usuario extends Model {}

Usuario.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nm_usuario: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email_usuario: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    senha_usuario: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    tp_usuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    }}, 
    {
        sequelize,
        modelName: 'Usuario',
        tableName: 'usuarios',
        timestamps: true
});

module.exports = Usuario;