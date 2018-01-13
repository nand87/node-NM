/** Program that exports Network Manager Function */

const { exec } = require('child_process');

/** Function that show a list of configured connection */
var connectionConfigured = () => {
	exec("nmcli connection show configured", (error, stdout, stderr) => {
		console.log("Configured Connection");
		console.log(stdout);
	});	
}

/**
 * Function that show the active connection
 * @param  {[type]} activeConnection [description]
 * @return {[type]}                  [description]
 */
var activeConnection = () => {
	exec("nmcli connection show --active", (error, stdout, stderr) => {
		console.log("Active Connection");
		console.log(stdout);
	});
}

/** Function that show the general status of NetworkManager */
var generalStatus = () => {
	exec("nmcli general status", (error, stdout, stderr) => {
		console.log("General Status of NetworkManager");
		console.log(stdout);
	});
}

/** Function that connect to a passed Connection Name */
var connUp = (connName) => {
	exec("nmcli connection up id " + connName, (error, stdout, stderr) => {
		if(error)
		{
			console.log("An error occurr during the connection at %s", connName);
			console.log(error);
			return;
		}
		console.log("Succesfully Connected to %s", connName);
	});
}

/** Function that disconnect to a passed Connection Name */
var connDown = (connName) => {
	exec("nmcli connection down id " + connName, (error, stdout, stderr) => {
		if(error)
		{
			console.log("An error occurr during the disconnection at %s", connName);
			console.log(error);
			return;
		}
		console.log("Succesfully Disconnected to %s", connName);
	});
}

var wifiStatus = () => {
	exec("nmcli radio wifi", (error, stdout, stderr) => {
		console.log("WiFi Status");
		console.log(stdout);
	});
}

var switchWifi = (switch) => {
	exec("nmcli radio wifi " + switch, (error, stdout, stderr) => {
		if(stderr)
		{
			console.log("An error occurr during the switching of Wi-Fi");
			return;
		}

		console.log("Wifi switched to %s", switch);
	});
}

var listWifi = () => {
	exec("nmcli device wifi list", (error, stdout, stderr) => {
		console.log("List of scanned wifi");
		console.log(stdout);
	});
}

var connectAP = (ssid, pass) => {
	exec("nmcli device wifi connect " + ssid + " password " + pass, (error, stdout, stderr) => {
		if(error)
		{
			console.log("An error occurr during the connection");
			console.log(error);
			return;
		}
		console.log("Succesfully Connected to %s AP", ssid);
	});
}

var deviceStatus = () => {
	exec("nmcli device status", (error, stdout, stderr) => {
		console.log("List available devices and theis status");
		console.log(stdout);
	});
}

exports.connectionConfigured 	= connectionConfigured;
exports.activeConnection 		= activeConnection;
exports.generalStatus 			= generalStatus;
exports.connectionUp 			= connUp;
exports.connectionDown 			= connDown;
exports.wifiStatus 				= wifiStatus;
exports.switchWifi 				= switchWifi;
exports.listWifiAP 				= listWifi;
exports.connectWifiAP 			= connectAP;
exports.deviceStatus 			= deviceStatus;