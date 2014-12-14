module.exports = function ( program ) {
	var destination,
		destinationExists = false,
		fs = require( 'fs' ),
		generate = require( './generate' ),
		readline = require( 'readline' );

	destination = typeof program.destination === 'string' && program.destination ? program.destination : process.cwd();

	try {
		destinationExists = fs.readdirSync( destination ).length ? true : false;
	} catch ( e ) {}

	switch ( true ) {

	case ( destinationExists ):
		var rl = readline.createInterface( {
			input: process.stdin,
			output: process.stdout
		} );

		rl.question( 'Folder is not empty, continue (YES|no)? ', function ( answer ) {
			rl.close();

			if ( /(y|yes|ok)/i.test( answer ) || answer === '' ) {
				generate( destination, program );
			} else {
				console.log( '' );
				console.log( '\taborting' );
				console.log( '' );
			}
		} );

		break;

	default:
		generate( destination, program );
		break;
	}
}