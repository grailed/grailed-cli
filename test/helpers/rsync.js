module.exports = function ( _from, _to, _callback ) {
	var exec = require( 'child_process' ).exec;

	exec( 'rsync -aPv ' + _from + ' ' + _to, function ( _error ) {
		if ( _error ) throw _error;
		if ( _callback ) _callback();
	} );
};