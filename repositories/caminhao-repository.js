'use-strict'

require('../models/caminhao-model');
const mongoose = require('mongoose');
const CaminhaoModel = mongoose.model('Caminhao');

class caminhaoRepository {
    constructor(){
    }

    async create(data) {
        let caminhao = new CaminhaoModel(data);
        let resultado = await caminhao.save();
        return resultado;
    }

    async update (id, data) {
        await CaminhaoModel.findByIdAndUpdate(id, { $set: data });
        let resultado = await CaminhaoModel.findById(id);
        return resultado;
    }

    async getAll(){
        return await CaminhaoModel.find();
    }

    async getById(id) {
        return await CaminhaoModel.findById(id);
    }

    async delete(id) {
        return await CaminhaoModel.findByIdAndRemove(id);
    }

}

module.exports = caminhaoRepository;