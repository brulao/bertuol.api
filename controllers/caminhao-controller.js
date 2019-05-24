'use strict'

const repository = require('../repositories/caminhao-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();

function caminhaoController() {

}

// Criar
caminhaoController.prototype.post = async (req, res) => {
    // Cria o validador
    let _validationContract = new validation();
    // Critérios de validação
    _validationContract.isRequired(req.body.placa, 'Informe a placa do caminhão.');
    _validationContract.isRequired(req.body.modeloCaminhao, 'Informe o modelo do caminhão.');
    _validationContract.isRequired(req.body.placa, 'Informe a placa do caminhão.');
    // Salva os dados
    ctrlBase.post(_repo, _validationContract, req, res);
};

// Atualiza pelo id
caminhaoController.prototype.put = async (req, res) => {
    // Cria o validador
    let _validationContract = new validation();
    // Critérios de validação
    _validationContract.isRequired(req.body.placa, 'Informe a placa do caminhão.');
    _validationContract.isRequired(req.body.modeloCaminhao, 'Informe o modelo do caminhão.');
    _validationContract.isRequired(req.body.placa, 'Informe a placa do caminhão.');
    // Salva os dados
    ctrlBase.put(_repo, _validationContract, req, res);
};

// Retorna todos
caminhaoController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

// Retorna número de caminhões
caminhaoController.prototype.contador = async (req, res) => {
    ctrlBase.contador(_repo, req, res);
};

// Retorna por id
caminhaoController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

// Remove po id
caminhaoController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = caminhaoController;