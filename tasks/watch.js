module.exports = function(grunt) {
    'use strict';

	grunt.config('watch', {
		index: {
			files: ['project/index.html'],
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
			tasks: ['uglify:build'],
			options: {
				nospawn: true
			}
		}
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
};