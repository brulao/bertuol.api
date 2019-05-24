'use-strict'

require('../models/viagem-model');
const base = require('../bin/base/repository-base');

class viagemRepository {

    constructor() {
        this._base = new base('Viagem');
    }

    async create(data) {
        return await this._base.create(data);
    }

    async update (id, data) {
        return await this._base.update(id, data);
    }

    async getAll(){
        return await this._base.getAll();
    }

    async contador(){
        return await this._base.contador();
    }

    async getById(id) {
        return await this._base.getById(id);
    }

    async delete(id) {
        return await this._base.delete(id);
    }

}

module.exports = viagemRepository;