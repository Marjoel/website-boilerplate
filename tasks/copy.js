module.exports = function(grunt) {
    'use strict';

	grunt.config('copy', {
		build: {
			files: [{
				expand: true,
				cwd: 'project/',
				src : ['*.html','.htaccess','robots.txt'],
				dest: 'dist/'
			}]
		}
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
};
