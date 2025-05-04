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

    static async cadastrarReserva(dadosReserva) {
        const { idUsuario, idServico, dataReserva, horaInicio, dsReserva } = dadosReserva;

        const servico = await Servico.findByPk(idServico);
        const horaFinal = this.calcularHoraFinal(horaInicio, servico.duracao_minutos);
   
        const reservas = await Reserva.findAll({where: {
            id_servico: idServico,
            data_reserva: dataReserva
        }});

        
        if (reservas.length > 0) {

            let reserva = await sequelize.query( 
                `SELECT id_reserva FROM reservas WHERE hora_inicio >= :horaFinal AND hora_final <= :horaInicio`, {
                replacements: { horaFinal, horaInicio },
                type: QueryTypes.SELECT,
            });

            console.log(reserva);
            if(reserva) {
                throw new Error('Já existe uma reserva nesse horário!');
            }
        }
        
        // return await Reserva.create({
        //     id_usuario: idUsuario,
        //     id_servico: idServico,
        //     data_reserva: dataReserva,
        //     hora_inicio: horaInicio,
        //     hora_final: horaFinal,
        //     ds_reserva: dsReserva,
        //     status_reserva: STATUS_RESERVA.PENDENTE
        // });
    }

    static calcularHoraFinal(horaInicio, duracaoServico) {
        const dataHoje = dayjs().format("YYYY-MM-DD");
        
        const inicio = dayjs.tz(`${dataHoje} ${horaInicio}`, "YYYY-MM-DD HH:mm:ss","America/Sao_Paulo");

        const termino = inicio.add(duracaoServico, 'minute');

        const horaFinal = termino.format("HH:mm:ss");

        return horaFinal;
    }
}

module.exports = ReservaService;