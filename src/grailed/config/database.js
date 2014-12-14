/**
 * grailed.database[...]
 *
 * (development|production|test) extends `default`
 */
module.exports = {

	default: {
		databaseName: grailed.env.DATABASE_NAME || '<%- name.replace(/[^\w]/g, "") %>',
		username: grailed.env.DATABASE_USERNAME || '',
		password: grailed.env.DATABASE_PASSWORD || '',
		primaryServer: grailed.env.DATABASE_PRIMARY_SERVER || '127.0.0.1',
		primaryServerPort: grailed.env.DATABASE_PRIMARY_SERVER_PORT || '27017',
		secondaryServer: grailed.env.DATABASE_SECONDARY_SERVER || '',
		secondaryServerPort: grailed.env.DATABASE_SECONDARY_SERVER_PORT || ''
	},

	development: {},
	production: {},

	test: {
		databaseName: '<%- name.replace(/[^\w]/g, "") %>_test'
	}

};