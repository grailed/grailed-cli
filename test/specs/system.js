var config = require( process.cwd() + '/test/config.js' );

describe( 'grailed', function () {
	this.slow( 5000 );
	this.timeout( 5000 );

	before( function ( _done ) {
		async.waterfall( [
			test.setup,
			test.helper.startGrailed
		], _done );
	} );

	after( test.tearDown );

	it( 'should exist', function () {
		grailed.should.exist;
	} );

	[
		'config',
		'express',
		'module',
		'system',
		'routes',
		'router',
		'env',
		'database',
		'moldy'
	].forEach( function ( _property ) {
			it( 'should have a property `' + _property + '`', function () {
				grailed[ _property ].should.exist;
			} );
		} );

} );