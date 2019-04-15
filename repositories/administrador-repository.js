'use-strict'

require('../models/administrador-model');
const mongoose = require('mongoose');
const AdministradorModel = mongoose.model('Administrador');

class administradorRepository {
    constructor(){
    }

    async create(data) {
        let administrador = new AdministradorModel(data);
        let resultado = await administrador.save();
        return resultado;
    }

    async update (id, data) {
        await AdministradorModel.findByIdAndUpdate(id, { $set: data });
        let resultado = await AdministradorModel.findById(id);
        return resultado;
    }

    async getAll(){
        return await AdministradorModel.find();
    }

    async getById(id) {
        return await AdministradorModel.findById(id);
    }

    async delete(id) {
        return await AdministradorModel.findByIdAndRemove(id);
    }

}

module.exports = administradorRepository;