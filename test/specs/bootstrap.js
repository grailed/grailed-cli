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

	it( 'bootstrap hook should be called', function () {
		grailed.customBootstrapHook.should.eql( true );
	} );

} );