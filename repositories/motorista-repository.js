'use-strict'

require('../models/motorista-model');
const mongoose = require('mongoose');
const MotoristaModel = mongoose.model('Motorista');

class motoristaRepository {
    constructor(){
    }

    async create(data) {
        let motorista = new MotoristaModel(data);
        let resultado = await motorista.save();
        return resultado;
    }

    async update (id, data) {
        await MotoristaModel.findByIdAndUpdate(id, { $set: data });
        let resultado = await MotoristaModel.findById(id);
        return resultado;
    }

    async getAll(){
        return await MotoristaModel.find();
    }

    async getById(id) {
        return await MotoristaModel.findById(id);
    }

    async delete(id) {
        return await MotoristaModel.findByIdAndRemove(id);
    }

}

module.exports = motoristaRepository;