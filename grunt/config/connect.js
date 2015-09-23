// https://github.com/gruntjs/grunt-contrib-connect
module.exports = {
	server: {
		//options: {
		//  port: 9001,
		//  base: '<%= paths.dist %>'
		//}
		bsFiles: {
			src : [
				'<%= paths.dist %>',
				'app/css/*.css',
				'app/*.html'
			]
		},
		options: {
			watchTask: true,
			server: '<%= paths.dist %>'
		}
	}
};