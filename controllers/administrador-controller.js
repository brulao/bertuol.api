'use strict'

require('../models/administrador-model');
const mongoose = require('mongoose');
const administrador = mongoose.model('Administrador');

function administradorController() {

}

administradorController.prototype.post = async (req, res) => {
    let modelo = new administrador(req.body);
    let resultado = await modelo.save();
    res.status(201).send(resultado);
};

administradorController.prototype.put = async (req, res) => {
    await administrador.findByIdAndUpdate(req.params.id, { $set: req.body });
    let administradorEncontrado = await administrador.findById(req.params.id);
    res.status(202).send(administradorEncontrado);
    console.log(`Registro inserido no banco de dados: ${administradorEncontrado}`);
};

administradorController.prototype.get = async (req, res) => {
    let lista = await administrador.find();
    res.status(200).send(lista);
};

administradorController.prototype.getById = async (req, res) => {
    let administradorEncontrado = await administrador.findById(req.params.id);
    res.status(200).send(administradorEncontrado);
};

administradorController.prototype.delete = async (req, res) => {
    let deletado = await administrador.findByIdAndRemove(req.params.id);
    res.status(204).send(deletado);
};

module.exports = administradorController;