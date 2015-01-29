var config = require( process.cwd() + '/test/config.js' );

describe( 'grailed modules', function () {
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

	[
		'system'
	].forEach( function ( _property ) {
			it( '`grailed.module` should have a property `' + _property + '`', function () {
				grailed.module[ _property ].should.exist;
			} );
		} );

	it( 'should automatically `use` app modules', function () {
		grailed.module.should.have.properties( [ 'todo', 'user' ] );
	} );

	it( 'should have a name & route', function () {
		var routes = [],
			grailedRoutes = _.chain( grailed.router.stack ).pluck( 'route' ).value();

		[ 'todo', 'user' ].forEach( function ( _moduleName ) {
			grailed.module[ _moduleName ].name.should.eql( _moduleName );
			grailed.module[ _moduleName ].routes.should.be.an.Array;
			routes = routes.concat( grailed.module[ _moduleName ].routes );
		} );

		routes.forEach( function ( _route ) {
			var routeFound;

			for ( var i = 0; i < grailedRoutes.length; i++ ) {
				var moduleRoute = _.findWhere( routes, { route: grailedRoutes[ i ].path } ),
					moduleRouteMethods,
					grailedRouteMethods = _.keys( grailedRoutes[ i ].methods );

				if ( moduleRoute ) {
					moduleRouteMethods = _.chain( moduleRoute ).omit( 'route' ).keys().value();
					moduleRouteMethods.forEach( function ( _method ) {
						if ( !routeFound && _.contains( grailedRouteMethods, _method ) ) routeFound = true;
					} );
				}

				if ( routeFound ) return;
			}

			should( routeFound ).eql( true );
		} );

	} );

} );