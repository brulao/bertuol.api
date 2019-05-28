'use strict'

const app = require('../bertuol.api/bin/express');
const variables = require('../bertuol.api/bin/configuration/variables');

app.listen(process.env.PORT || variables.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});