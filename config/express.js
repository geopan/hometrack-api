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

module.exports = function ( app ) {

	const env = app.get( 'env' );

	app.set( 'view engine', 'html' );

	app
		.use( morgan( 'dev' ) ) // :method :url :status :response-time ms - :res[content-length]
		.use( compression() )
		.use( bodyParser.json() )
		.use( bodyParser.urlencoded( { extended: false, strict: false } ) )

	app.use (function (error, req, res, next){
		if (error instanceof SyntaxError) {
			res.status(400).send({error:'Could not decode request: JSON parsing failed'});
		} else {
			next();
		}
	});

	if ( env === 'development' ) {
		app.use( errorHandler() );
	}

};
