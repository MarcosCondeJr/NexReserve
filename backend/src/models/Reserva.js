const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Reserva extends Model {}

Reserva.init({
    id_reserva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuario',
            key: 'id_usuario'
        }
    },
    id_servico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Servico',
            key: 'id_servico'
        }
    },
    data_reserva: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_reserva: {
        type: DataTypes.TIME,
        allowNull: false
    },
    status_reserva: {
        type: DataTypes.STRING,
        allowNull: false
    }}, {
        sequelize,
        modelName: 'Reserva',
        tableName: 'reservas',
        timestamps: true
});

module.exports = Reserva;