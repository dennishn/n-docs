/*
 * Generated on 2015-09-22
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2015 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

var ignoredBowerPkgs = [
	// Bootbox has a dependency on the "raw" bootstrap, we dont want it imported twice. -dhni
	'bower_components/bootstrap/dist/js/bootstrap.js',
	// We don't use the templating features of blueimp fileupload -dhni
	'bower_components/blueimp-tmpl/js/tmpl.js'
];

module.exports = function(grunt) {
	
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	
	// Project configuration.
	grunt.initConfig({
		
		config: {
			src: 'src',
			dist: 'dist'
		},
		
		watch: {
			options: {
				spawn: false
			},
			bower: {
				files: ['bower.json'],
				tasks: ['wiredep', 'bs-reload']
			},
			js: {
				files: [
					'<%= config.src %>/assets/scripts/**/*.js',
					'<%= config.src %>/nodes-backend/scripts/**/*.js'
				],
				tasks: ['bs-reload']
			},
			assemble: {
				files: ['<%= config.src %>/{content,data,templates}/**/*.{md,hbs,yml}'],
				tasks: ['assemble', 'bs-reload']
			},
			sass: {
				files: [
					'<%= config.src %>/assets/scss/**/*.{scss,sass}',
					'<%= config.src %>/nodes-backend/scss/**/*.{scss,sass}'
				],
				tasks: ['sass:server', 'autoprefixer', 'bs-injectScss']
			}
		},
		
		assemble: {
			pages: {
				options: {
					flatten: true,
					assets: '<%= config.dist %>/assets',
					layout: '<%= config.src %>/templates/layouts/default.hbs',
					data: '<%= config.src %>/data/*.{json,yml}',
					partials: '<%= config.src %>/templates/partials/*.hbs',
					plugins: ['assemble-contrib-anchors','assemble-contrib-permalinks','assemble-contrib-sitemap','assemble-contrib-toc'],
				},
				files: {
					'<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie >= 10']
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.dist %>/styles/',
					src: '{,*/}*.css',
					dest: '<%= config.dist %>/styles/'
				}]
			}
		},

		sass: {
			options: {
				sourcemap: true
			},
			server: {
				options: {
					debugInfo: true
				},
				files: {
					'<%= config.dist %>/styles/style.css': '<%= config.src %>/assets/scss/**/*.{scss,sass}',
					'<%= config.dist %>/styles/nodes.css': '<%= config.src %>/nodes-backend/scss/**/*.{scss,sass}'
				}
			}
		},

		useminPrepare: {
			html: '<%= config.src %>/templates/layouts/wiredep.hbs',
			staging: '.tmp',
			options: {
				dest: '<%= config.src %>/lol/layouts',
				//flow: {
				//	steps: {
				//		js: [
				//			{
				//				name: 'concat'
				//			}
				//		]
				//	},
				//	post: {}
				//}
			}
		},

		usemin: {
			html: ['<%= config.src %>/templates/layouts/default.hbs'],
			//options: {
			//	assetsDirs: ['<%= config.src %>']
			//}
		},

		wiredep: {
			options: {
				cwd: '',
				exclude: ignoredBowerPkgs
			},
			app: {
				src: ['<%= config.src %>/templates/layouts/wiredep.hbs'],
				ignorePath: /\.\.\//
			}
		},

		//copy: {
		//	nodes: {
		//		expand: true,
		//		cwd: '<%= config.src %>/nodes-backend/',
		//		src: '**',
		//		dest: '<%= config.dist %>/'
		//	},
		//
		//
		//	bootstrap: {
		//		expand: true,
		//		cwd: 'bower_components/bootstrap/dist/',
		//		src: '**',
		//		dest: '<%%= config.dist %>/assets/'
		//	},
		//	theme: {
		//		expand: true,
		//		cwd: 'src/assets/',
		//		src: '**',
		//		dest: '<%%= config.dist %>/assets/css/'
		//	}
		//},
		
		// Before generating any new files,
		// remove any previously-created files.
		clean: ['<%= config.dist %>/**/*.{html,xml}']
		
	});
	
	grunt.loadNpmTasks('assemble');
	
	grunt.registerTask('server', [
		'build',
		'connect:livereload',
		'watch'
	]);
	
	grunt.registerTask('build', [
		'clean',
		'wiredep',
		'sass:server',
		'autoprefixer',
		'useminPrepare',
		'concat',
		'usemin',
		//'copy',
		'assemble'
	]);
	
	grunt.registerTask('default', [
		'build'
	]);
	
};
