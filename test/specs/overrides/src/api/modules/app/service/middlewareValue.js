module.exports = function ( _req, _res, _next ) {
	_req.middlewareValue = _req.middlewareValue || [];
	_req.middlewareValue.push( _req.middlewareValue.length + 1 );
	_res.data = _req.middlewareValue;
	_next();
};