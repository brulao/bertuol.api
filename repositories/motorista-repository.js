'use-strict'

require('../models/motorista-model');
const base = require('../bin/base/repository-base');

class motoristaRepository {

    constructor() {
        this._base = new base('Motorista');
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

    async getById(id) {
        return await this._base.getById(id);
    }

    async delete(id) {
        return await this._base.delete(id);
    }


}

module.exports = motoristaRepository;