'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const caminhaoModel = new schema({
    placa: { type: String, required: true, trim: true, index: true },
    modeloCaminhao: { type: String, required: true },
    motorista: { type: String, required: true },
    ativo: { type: Boolean, required: true, default: true  },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

caminhaoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Caminhao', caminhaoModel);