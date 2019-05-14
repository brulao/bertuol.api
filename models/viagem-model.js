'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const abastecimento = new schema ({
    dataAbast: {
        type: String
    },
    cidadeAbast: {
        type: String
    },
    litrosAbast: {
        type: Number
    },
    precoLitro:{
        type: Number
    }
});

const viagemModel = new schema({
    dataViagem: { type: Date, required: true, index: true },
    motorista: { type: String, required: true, index: true },
    cliente: { type: String, required: true },
    destinatario: { type: String, required: true },
    notaFiscal: { type: String, required: true },
    produto: { type: String, required: true },
    pesoCarga: { type: Number, required: true },
    kmInicial: { type: Number, required: true },
    kmFinal: { type: Number, required: true },
    quantidadeLitros: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now },
    combustivel: [abastecimento]
}, { versionKey: false });

viagemModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Viagem', viagemModel);
