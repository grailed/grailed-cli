module.exports = [ {
	route: '/api/middleware',
	get: require( './respond' )
}, {
	route: '/api/middleware/grailed',
	get: function ( _req, _res ) {
		_res.json( grailed );
	}
} ];