'use strict'

require('../models/administrador-model');
const repository = require('../repositories/administrador-repository');

function administradorController() {

}

// Criar
administradorController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};

// Atualiza pelo id
administradorController.prototype.put = async (req, res) => {
    let resultado = new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
    console.log(`Registro atualizado no banco de dados: ${resultado}`);
};

// Retorna todos
administradorController.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
};

// Retorna por id
administradorController.prototype.getById = async (req, res) => {
    let administradorEncontrado = await new repository().getById(req.params.id);
    res.status(200).send(administradorEncontrado);
};

// Remover por id
administradorController.prototype.delete = async (req, res) => {
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = administradorController;