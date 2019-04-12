'use strict'

require('../models/viagem-model');
const mongoose = require('mongoose');
const viagem = mongoose.model('Viagem');

function viagemController() {

}

viagemController.prototype.post = async (req, res) => {
    let modelo = new viagem(req.body);
    let resultado = await modelo.save();
    res.status(201).send(resultado);
};

viagemController.prototype.put = async (req, res) => {
    await viagem.findByIdAndUpdate(req.params.id, { $set: req.body });
    let viagemEncontrada = await viagem.findById(req.params.id);
    res.status(202).send(viagemEncontrada);
    console.log(`Registro inserido no banco de dados: ${viagemEncontrada}`);
};

viagemController.prototype.get = async (req, res) => {
    let lista = await viagem.find();
    res.status(200).send(lista);
};

viagemController.prototype.getById = async (req, res) => {
    let viagemEncontrada = await viagem.findById(req.params.id);
    res.status(200).send(viagemEncontrada);
};

viagemController.prototype.delete = async (req, res) => {
    let deletado = await viagem.findByIdAndRemove(req.params.id);
    res.status(204).send(deletado);
};

module.exports = viagemController;