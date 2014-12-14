/**
 * grailed.env[...]
 *
 * (development|production|test) extends `default`
 */
module.exports = {

	default: {

		SALT: '<%- salt %>'

	},
	development: {},
	production: {},
	test: {}

}