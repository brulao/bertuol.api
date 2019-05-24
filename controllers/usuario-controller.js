'use strict'

const repository = require('../repositories/usuario-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const variables = require('../bin/configuration/variables');

function usuarioController() {

}

// Criar
usuarioController.prototype.post = async (req, res) => {
    // Cria o validador
    let _validationContract = new validation();
    // Critérios de validação
    _validationContract.isRequired(req.body.nome, 'Informe seu nome.');
    _validationContract.isRequired(req.body.email, 'Informe seu email.');
    _validationContract.isEmail(req.body.email, 'E-mail inválido.');
    _validationContract.isRequired(req.body.senha, 'A senha informada é inválida.');
    _validationContract.isRequired(req.body.senhaConfirmacao, 'A senha de confirmação é obrigatória.');    
    _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao, "A senha e a confirmação não são iguais." )
    
    // Verifica se e-mail existe
    if (req.body.email){
        let usuarioIsEmailExiste = await _repo.IsEmailExiste(req.body.email);
        if (usuarioIsEmailExiste) {
            _validationContract.isTrue((usuarioIsEmailExiste != undefined), `Já existe o e-mail ${req.body.email} cadastrado em nossa base.`);
        }
    }
    
    // Criptografa a senha do usuário
    if (req.body.senha) {
        req.body.senha = md5(req.body.senha);
    }

    // Usa o controller base
    ctrlBase.post(_repo, _validationContract, req, res)
};

// Atualiza pelo id
usuarioController.prototype.put = async (req, res) => {
    // Criar um validador
    let _validationContract = new validation();
    // Critérios de validação
    _validationContract.isRequired(req.body.nome, 'Informe seu nome.');
    _validationContract.isRequired(req.body.email, 'Informe seu email.');
    _validationContract.isEmail(req.body.email, 'E-mail inválido.');
    _validationContract.isRequired(req.params.id, 'Informe o Id do usuário que será editado');
    // Verifica se e-mail existe
    let usuarioIsEmailExiste = await _repo.IsEmailExiste(req.body.email);
    if (usuarioIsEmailExiste) {
        _validationContract.isTrue(
            (usuarioIsEmailExiste != undefined) && 
            (usuarioIsEmailExiste._id != req.params.id), 
            `Já existe o e-mail ${req.body.email} cadastrado em nossa base.`);
    }
    ctrlBase.put(_repo, _validationContract, req, res);
};

// Retorna todos
usuarioController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

// Retorna número de usuários
usuarioController.prototype.contador = async (req, res) => {
    ctrlBase.contador(_repo, req, res);
};

// Retorna por id
usuarioController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

// Remover por id
usuarioController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

usuarioController.prototype.autenticar = async (req, res) => {
    // Criar um validador
    let _validationContract = new validation();
    // Critérios de validação
    _validationContract.isRequired(req.body.email, 'Informe seu email.');
    _validationContract.isEmail(req.body.email, 'Email inválido.');
    _validationContract.isRequired(req.body.senha, 'Informe sua senha.');

    if (!_validationContract.isValid()){
        res.status(400).send({ message: 'Não foi possível efetuar o login.', validation: _validationContract.errors() });
        return;
    }

    let usuarioEncontrado = await _repo.authenticate(req.body.email, req.body.senha);
    
    if (usuarioEncontrado) {
        res.status(200).send({
            usuario: usuarioEncontrado,
            token: jwt.sign({ user: usuarioEncontrado }, variables.Security.secretKey)
        })
    } else {
        res.status(404).send({messsage: 'Usuário ou senha são inválidos.'});
    }
};

module.exports = usuarioController;