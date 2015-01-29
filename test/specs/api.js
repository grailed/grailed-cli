var config = require( process.cwd() + '/test/config.js' );

describe( 'grailed', function () {
	this.slow( 5000 );
	this.timeout( 5000 );

	before( function ( _done ) {
		async.waterfall( [
			test.setup,
			test.helper.syncOverrides( __dirname ),
			test.helper.startGrailed
		], _done );
	} );

	after( test.tearDown );

	it( 'should respond with a custom module todo', function ( _done ) {
		request.get( config.baseUrl + '/api/todo/12', function ( _error, _res, _todo ) {
			_done( _error );
		} );
	} );

} );