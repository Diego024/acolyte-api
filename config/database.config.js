const Mongoose = require('mongoose');
const logger = require('./../utils/logger');

const DB_USER = '00007122';
const DB_PASSWORD = 'GKhJRjk4yOTPdwFY';
const DB_NAME = 'taller02';
const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.nqpucgo.mongodb.net/?retryWrites=true&w=majority&appName=${DB_NAME}`

const connect = async () => {
    try {
        logger.info('Intentando conectar a la base de datos')
        await Mongoose.connect(DB_URI);
        logger.info('Conexión a la base de datos iniciada');
    } catch (error) {
        logger.error(error.message);
        process.exit(1);
    }
}

const disconnect = async () => {
    try {
        await Mongoose.disconnect();
        logger.info('Conexión a la base de datos cerrada');
    }
    catch (error) {
        logger.error(error.message);
        process.exit(1);
    }
}

module.exports = {
    connect,
    disconnect
}