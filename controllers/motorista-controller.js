'use strict'

require('../models/motorista-model');
const repository = require('../repositories/motorista-repository');

function motoristaController() {

}

// Criar
motoristaController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};

// Atualiza pelo id
motoristaController.prototype.put = async (req, res) => {
    let motoristaEncontrado = await new repository().update(req.params.id);
    res.status(202).send(motoristaEncontrado);
    console.log(`Registro atualizado no banco de dados: ${motoristaEncontrado}`);
};

// Retorna todos
motoristaController.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
};

// Retorna por id
motoristaController.prototype.getById = async (req, res) => {
    let motoristaEncontrado = await new repository().getById(req.params.id);
    res.status(200).send(motoristaEncontrado);
};

// Remove por id
motoristaController.prototype.delete = async (req, res) => {
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = motoristaController;