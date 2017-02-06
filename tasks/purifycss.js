module.exports = function(grunt) {
    'use strict';

	grunt.config('purifycss', {
    	build: {
			src: [
				'dist/*.html',
				'dist/assets/js/scripts.min.js',
				'dist/assets/js/vendor.min.js'
			],
			css: [
				'dist/assets/css/styles.min.css'
			],
			dest: 'dist/assets/css/styles.min.css'
		}
    });
    grunt.loadNpmTasks('grunt-purifycss');
};