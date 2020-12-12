const winston = require('winston');
const { logger } = require('../logger');

module.exports = function(err, req, res, next){
    logger.error('Error', err);
    // winston.error(err.message, err);

    // 500 = something failed on the server we don't know what.
    res.status(500).send('Something failed.');
}