module.exports = function(grunt) {
    'use strict';

	grunt.config('uglify', {
    	scripts: {
			files: [{
				'dist/assets/js/scripts.min.js': [
					'project/assets/js/*.js'
				]
			}]
		},
		vendor: {
			files: [{
				'dist/assets/js/vendor.min.js': []
			}]
		}
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
};