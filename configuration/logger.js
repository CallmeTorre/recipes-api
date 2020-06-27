//TODO: 
// * Store logs in a file.
//      * Divide logs by type in different files.
// * Use Mexico Timestamp.
const winston = require('winston');

const loggerFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}}`)
);

const logger = winston.createLogger({
    format: loggerFormat,
    transports: [
        new winston.transports.Console()
    ]
});

module.exports = logger