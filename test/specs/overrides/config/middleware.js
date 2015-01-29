/**
 * The Express middleware stack.
 *
 * Middleware object represented by a `name` & `method`.
 *
 * name: an arbitrary string
 * method: the middleware function (or 'default')
 *
 * Defaults are provided using the following
 * names:
 *
 * - logger
 * - bodyParser
 * - cookieParser
 * - static
 * - getGrailed
 * - getUserBySessionToken
 * - routes
 * - 404Handler
 * - errorHandler
 *
 */
module.exports = [ {

	/**
	 * http logger e.g. morgan()
	 */
	name: 'logger',
	method: 'default'

}, {

	/**
	 * body parser e.g. bodyParser.json()
	 */
	name: 'bodyParser',
	method: 'default'

}, {

	/**
	 * TEST: attaches middlwareValue to request
	 */
	name: 'middlewareValue',
	method: grailed.module.app.service.middlewareValue

}, {

	/**
	 * cookie parser e.g. cookieParser()
	 */
	name: 'cookieParser',
	method: 'default'

}, {

	/**
	 * static path e.g. express.static( "public" )
	 */
	name: 'static',
	method: 'default'

}, {

	/**
	 * TEST: attaches middlwareValue to request
	 */
	name: 'middlewareValue',
	method: grailed.module.app.service.middlewareValue

}, {
	/**
	 * attaches grailed to request
	 */
	name: 'grailed',
	method: 'default'

}, {

	/**
	 * TEST: attaches middlwareValue to request
	 */
	name: 'middlewareValue',
	method: grailed.module.app.service.middlewareValue

}, {

	/**
	 * This serves as a placeholder so we know where the routes are to be
	 * inserted in the middleware stack. Adding a `method` here will do nothing.
	 */
	name: 'routes',
	method: 'default'

}, {

	/**
	 * the 404 handler.
	 */
	name: '404Handler',
	method: 'default'

}, {

	/**
	 * the error handler
	 */
	name: 'errorHandler',
	method: 'default'

} ];