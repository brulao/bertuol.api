'use strict'

require('../models/caminhao-model');
const repository = require('../repositories/caminhao-repository');

function caminhaoController() {

}

// Criar
caminhaoController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};

// Atualiza pelo id
caminhaoController.prototype.put = async (req, res) => {
    let caminhaoEncontrado = await new repository().update(req.params.id, req.body);
    res.status(202).send(caminhaoEncontrado);
    console.log(`Registro atualizado no banco de dados: ${caminhaoEncontrado}`);
};

// Retorna todos
caminhaoController.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
};

// Retorna por id
caminhaoController.prototype.getById = async (req, res) => {
    let caminhaoEncontrado = await new repository().getById(req.params.id);
    res.status(200).send(caminhaoEncontrado);
};

// Remove po id
caminhaoController.prototype.delete = async (req, res) => {
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = caminhaoController;