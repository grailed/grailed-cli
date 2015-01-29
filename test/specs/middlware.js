var config = require( process.cwd() + '/test/config.js' );

describe( 'grailed middleware', function () {
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

	it( 'should have the grailed object automatically attached to the response', function ( _done ) {
		request.get( config.baseUrl + '/api/middleware/grailed', function ( _error, _res, _body ) {
			_body.should.have.properties( [ 'config', 'module', 'system' ] );
			_done();
		} );
	} );

	it( 'should be able to be hooked in to', function ( _done ) {
		request.get( config.baseUrl + '/api/middleware', function ( _error, _res, _body ) {
			_body.should.eql( [ 1, 2, 3 ] );
			_done();
		} );
	} );

} );