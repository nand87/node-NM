const { execSync, exec } = require('child_process');
const logger = require('./logger');
const commandCatalog = require('./commandCatalog.json');

const configuredConnection = () => {
  exec(`${commandCatalog.NMCLI.main} ${commandCatalog.NMCLI.connection.main} ${commandCatalog.NMCLI.connection.show} ${commandCatalog.NMCLI.connection.configured}`, (error, stdout) => {
    if (error) logger.error('ConfiguredConnection', '', error);
    logger.info('ConfiguredConnection', 'Configured Connection', stdout);
  });
}

const activeConnection = () => {
  exec(`${commandCatalog.NMCLI.main} ${commandCatalog.NMCLI.connection.main} ${commandCatalog.NMCLI.connection.show} ${commandCatalog.NMCLI.connection.active}`, (error, stdout) => {
    if (error) logger.error('ActiveConnection', '', error);
    logger.info('ActiveConnection', 'Active Connection', stdout);
  });
}

