module.exports = function(grunt) {
    'use strict';

	grunt.config('watch', {
		views: {
			files: ['project/*.html'],
			tasks: ['copy:build',
					'less:build',
					'purifycss:build',
					'csscomb:build',
					'cssmin:build'],
			options: {
				nospawn: true
			}
		},
		styles: {
			files: ['project/assets/css/**/*.less'],
			tasks: ['less:build',
					'purifycss:build',
					'csscomb:build',
					'cssmin:build'],
			options: {
				nospawn: true
			}
		},
		scripts: {
			files: ['project/assets/js/*.js'],
			tasks: ['uglify:scripts'],
			options: {
				nospawn: true
			}
		}
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
};