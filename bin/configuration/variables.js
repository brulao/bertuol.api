const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://bertuoladmin:bertuol123456@bertuoldb-aybrl.mongodb.net/bertuol?retryWrites=true'
    }
}
module.exports = variables;