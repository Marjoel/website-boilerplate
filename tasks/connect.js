module.exports = function(grunt) {
    'use strict';

	grunt.config('connect', {
    	server: {
			options: {
				port: 8081,
				base: 'dist/'
			}
		}
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
};