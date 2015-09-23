// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	grunt: {
		options: {
			spawn: false
		},
		files: ['Gruntfile.js']
	},
	sass: {
		files: ['<%= paths.scss %>**/*.scss', '<%= paths.doc %>assets/**/*.scss'],
		tasks: ['sass']
	},
	js: {
		files: ['<%= paths.js %>**/*.js', '<%= paths.doc %>assets/js/**/*.js'],
		tasks: ['copy', 'concat', 'uglify'],
		options: {
			livereload: true
		}
	},
	assemble_all: {
		files: ['<%= paths.doc %>{includes,layouts}/**/*.html'],
		tasks: ['assemble'],
		options: {
			livereload: true
		}
	},
	assemble_pages: {
		files: ['<%= paths.doc %>pages/**/*.html'],
		tasks: ['newer:assemble'],
		options: {
			livereload: true
		}
	},
	assets: {
		options: {
			cwd: '<%= paths.doc %>assets/',
			livereload: true
		},
		files: ['**/*', '!{scss,js}/**/*'],
		tasks: ['copy']
	},
};