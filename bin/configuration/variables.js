
const dotenv = require('dotenv');
dotenv.config();

const variables = {
    Api: {
        port: process.env.PORT || 3000
    },
    Database: {
        connection: process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/bertuol'
    },
    Security: {
        secretKey: process.env.JWT_SECRET || 'default-secret-key'
    }
}

module.exports = variables;
