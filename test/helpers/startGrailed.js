module.exports = function () {
	var cast = require( 'sc-cast' ),
		cb = _.last( _.toArray( arguments ) ),
		config = require( '../config' );

	if ( global.grailed ) return cb();

	try {
		process.chdir( test.tmpPath );
	} catch ( err ) {
		throw new Error( 'Could not change dir to ' + test.tmpPath );
	}

	require( path.join( test.tmpPath, 'bin/grailed' ) );

	grailed.on( 'ready', cb);
};