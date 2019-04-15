'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const administradorModel = new schema({
    nome: { type: String, required: true, trim: true, index: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    ativo: { type: Boolean, required: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

administradorModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Administrador', administradorModel);