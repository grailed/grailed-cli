// Test Globals
_ = require( 'underscore' );
async = require( 'async' );
path = require( 'path' );
requireDirectory = require( 'require-directory' );
should = require( 'should' );
request = require( 'request' ).defaults( {
	json: true
} );
//

var defaults = {
	port: process.env.PORT || 8888
};

module.exports = test = {

	/**
	 * A String that defines the API's port & base url
	 */
	port: defaults.port,
	baseUrl: process.env.GRAILED_BASE_URL || 'http://localhost:' + defaults.port,

	/**
	 * Helpers
	 */
	helper: requireDirectory( module, path.join( __dirname, 'helpers' ) ),

	/**
	 * If true, stdin, stdout, and stderr of the child will be suppressed
	 */
	silent: process.env.GRAILED_SILENT || false,

	/**
	 * A function that defines your custom setup hook
	 */
	setup: require( './setup' ),

	/**
	 * A function that defines your custom tearDown hook
	 */
	tearDown: require( './tearDown' ),

	/**
	 * The temp folder for the tests
	 */
	tmpPath: path.join( process.cwd(), 'test/.tmp' )

};