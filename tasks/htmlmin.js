module.exports = function(grunt) {
    'use strict';

	grunt.config('htmlmin', {
    	build: {
			options: {
                removeComments: true,
                collapseWhitespace: true
            },
			files: {
				'dist/index.html': 'dist/index.html'
		  }
		}
    });
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};