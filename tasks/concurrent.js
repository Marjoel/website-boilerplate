module.exports = function(grunt) {
    'use strict';

	grunt.config('concurrent', {
		options: {
			logConcurrentOutput: true
		},
		dev: {
			tasks: ['watch:styles', 'watch:scripts', 'watch:views']
		}
    });
    grunt.loadNpmTasks('grunt-concurrent');
};