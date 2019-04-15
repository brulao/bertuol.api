'use-strict'

require('../models/viagem-model');
const mongoose = require('mongoose');
const ViagemModel = mongoose.model('Viagem');

class viagemRepository {
    constructor(){
    }

    async create(data) {
        let viagem = new ViagemModel(data);
        let resultado = await viagem.save();
        return resultado;
    }

    async update (id, data) {
        await ViagemModel.findByIdAndUpdate(id, { $set: data });
        let resultado = await ViagemModel.findById(id);
        return resultado;
    }

    async getAll(){
        return await ViagemModel.find();
    }

    async getById(id) {
        return await ViagemModel.findById(id);
    }

    async delete(id) {
        return await ViagemModel.findByIdAndRemove(id);
    }

}

module.exports = viagemRepository;