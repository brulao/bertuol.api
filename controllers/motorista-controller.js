'use strict'

require('../models/motorista-model');
const mongoose = require('mongoose');
const motorista = mongoose.model('Motorista');

function motoristaController() {

}

motoristaController.prototype.post = async (req, res) => {
    let modelo = new motorista(req.body);
    let resultado = await modelo.save();
    res.status(201).send(resultado);
};

motoristaController.prototype.put = async (req, res) => {
    await motorista.findByIdAndUpdate(req.params.id, { $set: req.body });
    let motoristaEncontrado = await motorista.findById(req.params.id);
    res.status(202).send(motoristaEncontrado);
    console.log(`Registro inserido no banco de dados: ${motoristaEncontrado}`);
};

motoristaController.prototype.get = async (req, res) => {
    let lista = await motorista.find();
    res.status(200).send(lista);
};

motoristaController.prototype.getById = async (req, res) => {
    let motoristaEncontrado = await motorista.findById(req.params.id);
    res.status(200).send(motoristaEncontrado);
};

motoristaController.prototype.delete = async (req, res) => {
    let deletado = await motorista.findByIdAndRemove(req.params.id);
    res.status(204).send(deletado);
};

module.exports = motoristaController;