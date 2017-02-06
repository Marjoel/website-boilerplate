module.exports = function(grunt) {
    'use strict';
	
    grunt.loadTasks('./tasks');
	
	grunt.registerTask('styles', [
		'less:build',
		'purifycss:build',
		'csscomb:build',
		'cssmin:build' // using this because minify of purifycss is not working
	]);

	grunt.registerTask('scripts', [
		'uglify:scripts',
		'uglify:vendor'
	]);

	grunt.registerTask('views', [
		'copy:build',
		'htmlmin:build'
	]);

	grunt.registerTask('styles', [
		'less:build',
		'purifycss:build',
		'csscomb:build',
		'cssmin:build'
	]);

	grunt.registerTask('dev', [
		'concurrent:dev'
	]);
	
	grunt.registerTask('build', [
		'clean:build',
		'views',
		'scripts',
		'styles',
		'imagemin:build',
	]);
	
	grunt.registerTask('start', [
		'build',
		'connect:server:keepalive'
	]);
};
