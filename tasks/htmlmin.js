module.exports = function(grunt) {
    'use strict';

	grunt.config('htmlmin', {
    	build: {
			options: {
                removeComments: true,
                collapseWhitespace: true
            },
			files: [{
                expand: true,
                cwd: 'dist/',
                src: ['*.html'],
                dest: 'dist/'
            }]
		}
    });
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
