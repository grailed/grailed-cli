module.exports = function ( _req, _res, _next ) {
	grailed.module.todo.service.getTodo( _req.param.id, function ( _error, _todo ) {
		_res.data = _todo;
		_next( _error );
	} );
};