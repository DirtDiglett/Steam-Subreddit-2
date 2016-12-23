module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: {
					'stylesheet.compiled.css' : 'stylesheet.scss'
				}
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
};