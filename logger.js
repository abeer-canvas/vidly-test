const { info, format } = require('winston');
const winston = require('winston');

module.exports.logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: new winston.transports.File({ filename: 'error.log', level: 'error' })
});