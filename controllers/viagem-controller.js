'use strict'

const repository = require('../repositories/viagem-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();


function viagemController() {

}

// Criar
viagemController.prototype.post = async (req, res) => {
    // Cria o validador
    let _validationContract = new validation();
    // Critérios de validação
    _validationContract.isRequired(req.body.dataViagem, 'Informe a data da viagem');
    _validationContract.isRequired(req.body.motorista, 'Informe o nome do motorista');
    _validationContract.isRequired(req.body.caminhao, 'Informe o caminhao');
    _validationContract.isRequired(req.body.cliente, 'Informe o nome do cliente');
    _validationContract.isRequired(req.body.destinatario, 'Informe o nome do destinatario');
    _validationContract.isRequired(req.body.notaFiscal, 'Informe o número da nota fiscal');
    _validationContract.isRequired(req.body.produto, 'Informe o produto transportado');
    _validationContract.isRequired(req.body.pesoCarga, 'Informe o peso da carga');
    _validationContract.isRequired(req.body.kmInicial, 'Informe o Km do início da viagem');

    // _validationContract.isRequired(req.body.kmFinal, 'Informe o Km do final da viagem');
    // _validationContract.isRequired(req.body.kilometragem, 'Informe a kilometragem percorrida');
    // _validationContract.isRequired(req.body.quantidadeLitros, 'Informe a quantidade de litros abastecida');
    // _validationContract.isRequired(req.body.consumo, 'Informe a média de consumo (km/litro)')
    
    // Realização a criação da viagem
    ctrlBase.post(_repo, _validationContract, req, res);
};

// Atualiza pelo id
viagemController.prototype.put = async (req, res) => {
    // Cria o validador
    let _validationContract = new validation();
    // Critérios de validação
    _validationContract.isRequired(req.body.dataViagem, 'Informe a data da viagem');
    _validationContract.isRequired(req.body.motorista, 'Informe o nome do motorista');
    _validationContract.isRequired(req.body.caminhao, 'Informe o caminhao');
    _validationContract.isRequired(req.body.cliente, 'Informe o nome do cliente');
    _validationContract.isRequired(req.body.destinatario, 'Informe o nome do destinatario');
    _validationContract.isRequired(req.body.notaFiscal, 'Informe o número da nota fiscal');
    _validationContract.isRequired(req.body.produto, 'Informe o produto transportado');
    _validationContract.isRequired(req.body.pesoCarga, 'Informe o peso da carga');
    _validationContract.isRequired(req.body.kmInicial, 'Informe o Km do início da viagem');
    _validationContract.isRequired(req.body.kmFinal, 'Informe o Km do final da viagem');   
    _validationContract.isRequired(req.body.kilometragem, 'Informe a kilometragem percorrida');
    _validationContract.isRequired(req.body.quantidadeLitros, 'Informe a quantidade de litros abastecida');
    _validationContract.isRequired(req.body.consumo, 'Informe a média de consumo (km/litro)')
    // Atualiza as informações da viagem    
    ctrlBase.put(_repo, _validationContract, req, res);
};

// Retorna todos
viagemController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

// Retorna viagens ordenadas
viagemController.prototype.getViagens = async (req, res) => {
    ctrlBase.getViagens(_repo, req, res);
};

// Retorna número de viagens
viagemController.prototype.contador = async (req, res) => {
    ctrlBase.contador(_repo, req, res);
};

// Retorna por id
viagemController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

// Remove por id
viagemController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = viagemController;