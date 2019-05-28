'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const viagemModel = new schema({
    dataViagem: { type: Date, required: true, index: true },
    motorista: { type: String, required: true, index: true, trim: true },
    caminhao: { type: String, required: true, trim: true },
    cliente: { type: String, required: true },
    destinatario: { type: String, required: true },
    notaFiscal: { type: String, required: true },
    produto: { type: String, required: true },
    pesoCarga: { type: Number, required: true },
    kmInicial: { type: Number, required: true },
    kmFinal: { type: Number },
    kilometragem: { type:Number },
    quantidadeLitros: { type: Number },
    consumo: { type: Number },
    dataCriacao: { type: Date, default: Date.now },
}, { versionKey: false });

viagemModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Viagem', viagemModel);
