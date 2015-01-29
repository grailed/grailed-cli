var todo = requireDirectory( module, 'controller' );

module.exports = [ {
	route: '/api/todo',
	get: function () {
	},
	post: function () {
	}
}, {
	route: '/api/todo/:id',
	get: [ todo.get, grailed.module.app.respond ],
	put: function () {
	}
} ];