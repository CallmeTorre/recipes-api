const logger = require('../configuration/logger.js');

function loggerMiddleware(req, res, next){
    logger.info(req.originalUrl);
    next();
};

module.exports = loggerMiddleware;