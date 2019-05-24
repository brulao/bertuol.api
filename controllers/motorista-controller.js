'use strict'

const repository = require('../repositories/motorista-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();

function motoristaController() {

}

// Criar
motoristaController.prototype.post = async (req, res) => {
    // Cria o validador
    let _validationContract = new validation();
    // Critérios de validação
    _validationContract.isRequired(req.body.nome, 'Informe o nome do motorista.');
    _validationContract.isRequired(req.body.email, 'Informe o email do motorista.');
    _validationContract.isRequired(req.body.telefoneUm, 'Informe o número de telefone principal do motorista.');
    ctrlBase.post(_repo, _validationContract, req, res);
};

// Atualiza pelo id
motoristaController.prototype.put = async (req, res) => {
    // Cria o validador
    let _validationContract = new validation();
    // Critérios de validação
    _validationContract.isRequired(req.body.nome, 'Informe o nome do motorista.');
    _validationContract.isRequired(req.body.email, 'Informe o email do motorista.');
    _validationContract.isRequired(req.body.telefoneUm, 'Informe o número de telefone principal do motorista.');
    ctrlBase.put(_repo, _validationContract, req, res);
};

// Retorna todos
motoristaController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

// Retorna número de motoristas
motoristaController.prototype.contador = async (req, res) => {
    ctrlBase.contador(_repo, req, res);
};

// Retorna por id
motoristaController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

// Remove por id
motoristaController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = motoristaController;