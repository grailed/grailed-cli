var config = require( './config.js' );

requireDirectory( module, path.join( __dirname, 'specs' ), {
	recurse: false
} );