/** Program that exports Network Manager Function */

const { exec } = require('child_process');

/** Function that show a list of configured connection */
const connectionConfigured = () => {
  exec('nmcli connection show configured', (error, stdout) => {
    console.log('Configured Connection');
    console.log(stdout);
  });
};

/**
 * Function that show the active connection
 * @param  {[type]} activeConnection [description]
 * @return {[type]}                  [description]
 */
const activeConnection = () => {
  exec('nmcli connection show --active', (error, stdout) => {
    console.log('Active Connection');
    console.log(stdout);
  });
};

/** Function that show the general status of NetworkManager */
const generalStatus = () => {
  exec('nmcli general status', (error, stdout) => {
    console.log('General Status of NetworkManager');
    console.log(stdout);
  });
};

/** Function that connect to a passed Connection Name */
const connUp = (connName) => {
  exec(`nmcli connection up id ${connName}`, (error) => {
    if (error) {
      console.log('An error occurr during the connection at %s', connName);
      console.log(error);
      return;
    }
    console.log('Succesfully Connected to %s', connName);
  });
};

/** Function that disconnect to a passed Connection Name */
const connDown = (connName) => {
  exec(`nmcli connection down id ${connName}`, (error) => {
    if (error) {
      console.log('An error occurr during the disconnection at %s', connName);
      console.log(error);
      return;
    }
    console.log('Succesfully Disconnected to %s', connName);
  });
};

const wifiStatus = () => {
  exec('nmcli radio wifi', (error, stdout) => {
    console.log('WiFi Status');
    console.log(stdout);
  });
};

const switchWifi = (onOff) => {
  exec(`nmcli radio wifi ${onOff}`, (error, stdout, stderr) => {
    if (stderr) {
      console.log('An error occurr during the switching of Wi-Fi');
      return;
    }

    console.log('Wifi switched to %s', onOff);
  });
};

const listWifi = () => {
  exec('nmcli device wifi list', (error, stdout) => {
    console.log('List of scanned wifi');
    console.log(stdout);
  });
};

const connectAP = (ssid, pass) => {
  exec(`nmcli device wifi connect ${ssid} password ${pass}`, (error) => {
    if (error) {
      console.log('An error occurr during the connection');
      console.log(error);
      return;
    }
    console.log('Succesfully Connected to %s AP', ssid);
  });
};

const deviceStatus = () => {
  exec('nmcli device status', (error, stdout) => {
    console.log('List available devices and theis status');
    console.log(stdout);
  });
};


exports.connectionConfigured = connectionConfigured;
exports.activeConnection = activeConnection;
exports.generalStatus = generalStatus;
exports.connectionUp = connUp;
exports.connectionDown = connDown;
exports.wifiStatus = wifiStatus;
exports.switchWifi = switchWifi;
exports.listWifiAP = listWifi;
exports.connectWifiAP = connectAP;
exports.deviceStatus = deviceStatus;
