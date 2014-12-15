module.exports = function ( destination, program ) {
	var clc = require( 'cli-color' ),
		config = require( './config.json' ),
		crypto = require( 'crypto' ),
		data = {},
		ejs = require( 'ejs' ),
		fs = require( 'fs-extra' ),
		path = require( 'path' ),
		Spinner = require( 'cli-spinner' ).Spinner;

	var createHash = function () {
		var sha = crypto.createHash( 'sha256' );
		sha.update( Date.now().toString() + Math.random().toString() );
		return sha.digest( 'base64' );
	};


	/**
	 * Copy the src files to the destination
	 */
	fs.mkdirpSync( destination );
	fs.copySync( path.join( __dirname, 'grailed' ), destination );


	/**
	 * Copy program options to data.values
	 */
	data.version = program.version();
	data.salt = program.salt || createHash();
	[ 'author', 'license', 'name' ].forEach( function ( _key ) {
		data[ _key ] = program[ _key ] || config.defaults[ _key ];
	} );


	/**
	 * Populate templates
	 */
	config.templates.forEach( function ( _templatePath ) {
		var template = fs.readFileSync( path.join( __dirname, 'grailed', _templatePath ), {
			encoding: 'utf8'
		} );

		fs.writeFileSync( path.join( destination, _templatePath ), ejs.render( template, data ) );
	} );


	/**
	 * Make?
	 */
	if ( program.make ) {
		var spinner = new Spinner( 'making...' );
		spinner.setSpinnerString( '|/-\\' );
		spinner.start();

		var child = require( 'child_process' ).exec( 'make', {
			cwd: destination
		}, function () {
			spinner.stop();
			process.stdout.clearLine();
			console.log( '' );
			console.log( clc.green( '  all done ✓' ) );
			console.log( '' );
		} );
	} else {
		console.log( '' );
		console.log( clc.cyan( 'Now make the app' ) );
		console.log( '  ', '$', 'cd ' + destination );
		console.log( '  ', '$', 'make' );
		console.log( '' );
	}

};