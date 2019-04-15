'use strict'

require('../models/viagem-model');
const repository = require('../repositories/viagem-repository');

function viagemController() {

}

// Criar
viagemController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};

// Atualiza pelo id
viagemController.prototype.put = async (req, res) => {
    let viagemEncontrada = await new repository().update(req.params.id);
    res.status(202).send(viagemEncontrada);
    console.log(`Registro atualizado no banco de dados: ${viagemEncontrada}`);
};

// Retorna todos
viagemController.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
};

// Retorna por id
viagemController.prototype.getById = async (req, res) => {
    let viagemEncontrada = await new repository().getById(req.params.id);
    res.status(200).send(viagemEncontrada);
};

// Remove por id
viagemController.prototype.delete = async (req, res) => {
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = viagemController;