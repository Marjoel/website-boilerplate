module.exports = function(grunt) {
    'use strict';

	grunt.config('cssmin', {
    	build: {
			files: [{
				'dist/assets/css/styles.min.css': [
					'dist/assets/css/styles.min.css'
				]
			}]
		}
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};