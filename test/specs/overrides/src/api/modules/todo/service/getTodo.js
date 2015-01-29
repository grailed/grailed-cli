module.exports = function ( _id, _callback ) {
	setTimeout( function () {
		_callback( null, {
			id: _id,
			name: 'cook chicken'
		} );
	}, 1000 );
};