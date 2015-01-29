module.exports = function ( _done ) {
	var async = require( 'async' ),
		fs = require( 'fs-extra' ),
		exec = require( 'child_process' ).exec;

	fs.ensureDirSync( test.tmpPath );
	fs.ensureDirSync( path.join( test.tmpPath, 'node_modules' ) );

	async.waterfall( [

		function ( _next ) {
			exec( './bin/grailed -f -n test -d ' + test.tmpPath, function ( _error ) {
				if ( _error ) throw _error;
				_next();
			} );
		},

		function ( _next ) {
			exec( 'ln -s ' + path.join( process.cwd(), 'node_modules/grailed' ) + ' ' + path.join( __dirname, '.tmp/node_modules' ), function () {
				_next();
			} );
		},

		function ( _next ) {
			exec( 'ln -s ' + path.join( process.cwd(), 'node_modules/gulp' ) + ' ' + path.join( __dirname, '.tmp/node_modules' ), function () {
				_next();
			} );
		}

	], function () {
		_done();
	} );
};