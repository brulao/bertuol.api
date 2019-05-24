'use strict'

const express =  require('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller');
const auth = require('../middlewares/authentication');

let _ctrl = new controller();

// Acesso público
router.post('/autenticar', _ctrl.autenticar);
router.post('/register', _ctrl.post);

// Autenticação requerida
router.get('/', auth, _ctrl.get);
router.get('/total', auth, _ctrl.contador);
router.get('/:id', auth, _ctrl.getById);
router.post('/', auth, _ctrl.post);
router.put('/:id', auth, _ctrl.put);
router.delete('/:id', auth, _ctrl.delete);

module.exports = router;
