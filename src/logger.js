const moment = require('moment');
const pid = process.pid;

const colors = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m", 
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",
    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m"
};

const loggerType = {
    debug: '[DEBUG]',
    info: '[INFO]',
    error: '[ERROR]'
};

const nowDate = () => {
    return moment().format();
};

const logger = (method = 'debug', def) => {
    const paramTypePrint = {
        string: '%s',
        object: '%j'
    };
    let typePrint = '';
    if (def.param) typePrint = (typeof def === 'object') ? paramTypePrint.object : paramTypePrint.string;
    console.log(`${nowDate()} [${pid}] ${colors.FgBlue} ${method} - [${def.functionName}] ${def.text} ${typePrint}`, def.param);
}

const info = (functionName = '', text = '', param = undefined) => {
    const logObject = {
        functionName,
        text,
        param
    };
    logger(loggerType.info, logObject);
};

const debug = (functionName = '', text = '', param = undefined) => {
    const logObject = {
        functionName,
        text,
        param
    };
    logger(loggerType.debug, logObject);
};

const error = (functionName = '', text = '', param = undefined) => {
    const logObject = {
        functionName,
        text,
        param
    };
    logger(loggerType.error, logObject);
};

module.exports = {
    debug,
    info,
    error
};
