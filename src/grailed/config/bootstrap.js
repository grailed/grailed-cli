/**
 * A bootstrap hook. This is executed after the grailed system has initialised
 * and just before the http listener is registered allowing you to make last
 * second changes to the app.
 */
module.exports = function ( _done ) {
	_done();
}