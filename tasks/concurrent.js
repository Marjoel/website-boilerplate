module.exports = function(grunt) {
    'use strict';

	grunt.config('concurrent', {
		options: {
			logConcurrentOutput: true
		},
		dev: {
			tasks: ['watch:styles', 'watch:scripts', 'watch:index']
		}
    });
    grunt.loadNpmTasks('grunt-concurrent');
};