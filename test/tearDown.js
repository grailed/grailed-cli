module.exports = function ( _done ) {
	var fs = require( 'fs-extra' );

	try {
		process.chdir( path.join(test.tmpPath, '../../') );
	}	catch ( err ) {
		throw new Error('Could not change dir to ' + test.tmpPath);
	}

	fs.removeSync( test.tmpPath );

	_done();
}