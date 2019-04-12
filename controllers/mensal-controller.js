'use strict'

require('../models/mensal-model');
const mongoose = require('mongoose');
const mensal = mongoose.model('Mensal');

function mensalController() {

}

mensalController.prototype.post = async (req, res) => {
    let modelo = new mensal(req.body);
    let resultado = await modelo.save();
    res.status(201).send(resultado);
};

mensalController.prototype.put = async (req, res) => {
    await mensal.findByIdAndUpdate(req.params.id, { $set: req.body });
    let administradorEncontrado = await mensal.findById(req.params.id);
    res.status(202).send(administradorEncontrado);
    console.log(`Registro inserido no banco de dados: ${administradorEncontrado}`);
};

mensalController.prototype.get = async (req, res) => {
    let lista = await mensal.find();
    res.status(200).send(lista);
};

mensalController.prototype.getById = async (req, res) => {
    let administradorEncontrado = await mensal.findById(req.params.id);
    res.status(200).send(administradorEncontrado);
};

mensalController.prototype.delete = async (req, res) => {
    let deletado = await mensal.findByIdAndRemove(req.params.id);
    res.status(204).send(deletado);
};

module.exports = mensalController;