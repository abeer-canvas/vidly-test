const { info, format } = require('winston');
const winston = require('winston');
require('winston-mongodb');

module.exports.logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ 
            filename: 'error.log', level: 'error' 
        }),
        new winston.transports.MongoDB({
            level: 'error',
            db: 'mongodb://localhost/vidly-test',
            options: { useUnifiedTopology: true }
        })
    ],
});