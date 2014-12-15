var grailedTest = require( process.cwd() + '/bin/grailed-test' ),
	path = require( 'path' );

module.exports = {

	/**
	 * An array strings that represent the paths of your specs (globbing
	 * supported)
	 */
	specs: [
		path.join( __dirname, 'specs/**/*.js' ),
		path.join( process.env.GRAILED_PATH_GRAILED, 'test/api/specs/**/*.js' )
	],

	/**
	 * A String that defines the API's base url
	 */
	baseUrl: process.env.TEST_BASE_URL || 'http://localhost:3000',

	/**
	 * A function that defines your custom setup hook
	 */
	setup: require( './setup' ),

	/**
	 * A function that defines your custom tearDown hook
	 */
	tearDown: require( './tearDown' )

}