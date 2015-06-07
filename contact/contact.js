'use strict';

// Imports
var angular = require('angular');

var ContactCtrl  = require('./controllers/contactCtrl');
var ContactsService  = require('./services/contactsService');

// Camera sub-module definition
var contact = angular.module('app.contact', []);
contact.controller('ContactCtrl', [
	'ContactsService',
	ContactCtrl
]);

module.exports = contact;