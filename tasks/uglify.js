module.exports = function(grunt) {
    'use strict';

	grunt.config('uglify', {
    	build: {
			files: [{
				'dist/assets/js/scripts.min.js': [
					'project/assets/js/*.js'
				]
			}]
		}
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
};