'use strict'

const app = require('./bin/express');
const variables = require('./bin/configuration/variables');

app.listen(variables.Api.port, "0.0.0.0", () => {
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});