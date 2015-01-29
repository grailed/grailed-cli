module.exports = function ( _overridePath ) {
	var _ = require( 'underscore' ),
		rsync = require( './rsync' );

	return function () {
		var cb = _.last( _.toArray( arguments ) );

		rsync( path.join( _overridePath, '/overrides/' ), path.join( test.tmpPath, '/' ), cb );
	}
};