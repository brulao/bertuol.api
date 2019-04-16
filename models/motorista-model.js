'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const motoristaModel = new schema({
    nome: { type: String, required: true, trim: true, index: true },
    email: { type: String, required: true },
    telefoneUm: { type: String, required: true },
    telefoneDois:  { type: String },
    ativo: { type: Boolean, required: true, default: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

motoristaModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Motorista', motoristaModel);