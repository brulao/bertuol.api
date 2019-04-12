'use strict'

require('../models/caminhao-model');
const mongoose = require('mongoose');
const caminhao = mongoose.model('Caminhao');

function caminhaoController() {

}

caminhaoController.prototype.post = async (req, res) => {
    let modelo = new caminhao(req.body);
    let resultado = await modelo.save();
    res.status(201).send(resultado);
};

caminhaoController.prototype.put = async (req, res) => {
    await caminhao.findByIdAndUpdate(req.params.id, { $set: req.body });
    let caminhaoEncontrado = await caminhao.findById(req.params.id);
    res.status(202).send(caminhaoEncontrado);
    console.log(`Registro inserido no banco de dados: ${caminhaoEncontrado}`);
};

caminhaoController.prototype.get = async (req, res) => {
    let lista = await caminhao.find();
    res.status(200).send(lista);
};

caminhaoController.prototype.getById = async (req, res) => {
    let caminhaoEncontrado = await caminhao.findById(req.params.id);
    res.status(200).send(caminhaoEncontrado);
};

caminhaoController.prototype.delete = async (req, res) => {
    let deletado = await caminhao.findByIdAndRemove(req.params.id);
    res.status(204).send(deletado);
};

module.exports = caminhaoController;