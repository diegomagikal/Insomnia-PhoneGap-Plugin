'use strict';

var exec = require('cordova/exec');

Insomnia.prototype = {

		keepAwake: function (successCallback, errorCallback) {
		  exec(successCallback, errorCallback, "Insomnia", "keepAwake", []);
		},

		allowSleepAgain: function (successCallback, errorCallback) {
		  exec(successCallback, errorCallback, "Insomnia", "allowSleepAgain", []);
		},


}


Insomnia.install = function(){
	if (!window.plugins) {
	  window.plugins = {};
	}

	window.plugins.insomnia = new Insomnia();
	return window.plugins.insomnia;	
}


cordova.addConstructor(Insomnia.install);