/**
 * Express configuration
 */

'use strict';

const express = require( 'express' );
const bodyParser = require( 'body-parser' ); // Node.js body parsing middleware.
const compression = require( 'compression' ); // Node.js compression middleware.
const errorHandler = require( 'errorhandler' ); // Development-only error handler middleware
const morgan = require( 'morgan' ); // HTTP request logger middleware for node.js
const config = require( './env' );
const path = require( 'path' ); // Node utilities (no need npm insatll) for handling and transforming file paths

module.exports = function ( app ) {

	const env = app.get( 'env' );

	//app.set('views', config.root + '/public');
	app.set( 'view engine', 'html' );

	app
		.use( morgan( 'dev' ) ) // :method :url :status :response-time ms - :res[content-length]
		.use( compression() )
		.use( bodyParser.json() )
		.use( bodyParser.urlencoded( { extended: false } ) )

	app.use( express.static( path.join( config.root, 'public' ) ) );

	if ( env === 'development' ) {
		app.use( errorHandler() );
	}

};
