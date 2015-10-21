/**
 * Main application module
 * @namespace Application
 */
(function () {
	'use strict';
	
	angular
		.module ('app', [
			'app.core',
			'templates',
			'app.widgets'
		]);
}) ();