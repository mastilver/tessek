#!/usr/bin/env node
'use strict';
var meow = require('meow');
var tessek = require('../');

var cli = meow({
	help: [
		'Usage',
		'  $ tessek [input]',
		'',
	]
});
