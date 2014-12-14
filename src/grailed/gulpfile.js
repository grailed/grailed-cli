var env = require( './bin/grailed-env' ),
	tasks = require( env.PATH_GRAILED + '/src/system/tasks' );

[ 'build', 'default', 'minify', 'run' ].forEach( function ( _task ) {
	gulp.task( _task, tasks[ _task ].concat( require( './tasks/' + _task ) ) );
} );