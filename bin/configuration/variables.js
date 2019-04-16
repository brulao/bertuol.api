const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://bertuoladmin:bertuol123456@bertuoldb-aybrl.mongodb.net/bertuol?retryWrites=true'
    },
    Security: {
        secretKey: 'e3928a3bc4be46516aa33a79bbdfdb08|cb6caa35194aee95fffa72f737c4fabb'
    }
}
module.exports = variables;