/**
 * Dependency stack. Preferably use the pre-minified versions as grailed will
 * simply concat this list.
 */
module.exports = [
	grailed.env.PATH_PUBLIC + '/components/jquery/dist/jquery.min.js',
	grailed.env.PATH_PUBLIC + '/components/angular/angular.min.js'
];