const { QueryTypes } = require('sequelize');
const STATUS_RESERVA = require('../enums/StatusReserva');
const { Reserva, Servico } = require('../models/associations');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const sequelize = require('../config/database');

dayjs.extend(utc);
dayjs.extend(timezone);

class ReservaService {
    static async listarReservas() {
        return await Reserva.findAll();
    }

    static async buscarReservaPorId(idReserva) {
        const reserva = await Reserva.findByPk(idReserva);

        if (!reserva) {
            throw new Error('Reserva não encontrada!');
        }

        return reserva;
    }

    static async cadastrarReserva(dadosReserva) {
        const { idUsuario, idServico, dataReserva, horaInicio, dsReserva } = dadosReserva;

        const [servico] = await sequelize.query(
            'SELECT servicos.duracao_minutos FROM servicos WHERE id_servico = :id_servico', {
                replacements: { id_servico: idServico },
                type: QueryTypes.SELECT
            });

        const horaFinal = this.calcularHoraFinal(horaInicio, servico.duracao_minutos);
   
        const reservas = await Reserva.findAll({where: {
            id_servico: idServico,
            data_reserva: dataReserva
        }});

        
        if (reservas.length > 0) {
            const reservaIcompativel = reservas.filter( reserva => {
                return this.verificarReservaExistente(reserva, horaInicio, horaFinal);
            })
        
            if (reservaIcompativel.length > 0) {
                throw new Error('Já existe uma reserva nesse horário!');
            }
        }
        
        return await Reserva.create({
            id_usuario: idUsuario,
            id_servico: idServico,
            data_reserva: dataReserva,
            hora_inicio: horaInicio,
            hora_final: horaFinal,
            ds_reserva: dsReserva,
            status_reserva: STATUS_RESERVA.PENDENTE
        });
    }

    static calcularHoraFinal(horaInicio, duracaoServico) {
        const dataHoje = dayjs().format("YYYY-MM-DD");
        const inicio = dayjs.tz(`${dataHoje} ${horaInicio}`, "YYYY-MM-DD HH:mm:ss","America/Sao_Paulo");
        
        const final = inicio.add(duracaoServico, 'minute');
        
        const horaFinal = final.format("HH:mm:ss");
        
        return horaFinal;
    }

    static verificarReservaExistente(reserva, horaInicio, horaFinal) {
         if (!(horaFinal <= reserva.hora_inicio || horaInicio >= reserva.hora_final)) {
            return true;
         }
    }

    static async deletarReserva(idReserva) {
        const reserva = await Reserva.findByPk(idReserva);

        if (!reserva) {
            throw new Error('Reserva não encontrada!');
        }

        return await reserva.destroy();
    }
}

module.exports = ReservaService;