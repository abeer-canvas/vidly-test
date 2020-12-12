const winston = require('winston');
const { logger } = require('../logger');
const { transports } = require('winston');

module.exports = function(){
    // process.on('uncaughtException', (ex)=> {
    //   logger.error('Error', ex);
    //   // process.exit(1);
    // });

    logger.exceptions.handle(
        new transports.Console(),
        new transports.File({ filename: 'exceptions.log' })
    );
    
    process.on('unhandledRejection', (ex)=> {
        // logger.error('Error', ex);
        // process.exit(1);
        throw ex;
    });
    
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
    // winston.add(new winston.transports.File({ 
    //   filename: 'logfile.log',
    //   handleExceptions: true
    // }));
}