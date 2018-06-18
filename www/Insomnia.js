'use strict';

var exec = require('cordova/exec');

function Insomnia(){
	this._sleepingAlowed = true;
}

Insomnia.prototype = {

		keepAwake: function (successCallback, errorCallback) {
		  exec(successCallback, errorCallback, "Insomnia", "keepAwake", []);
		  this._sleepingAlowed = false;
		},

		allowSleepAgain: function (successCallback, errorCallback) {
		  exec(successCallback, errorCallback, "Insomnia", "allowSleepAgain", []);
		  this._sleepingAlowed = true;
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