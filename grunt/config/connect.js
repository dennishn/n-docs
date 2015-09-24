// https://github.com/gruntjs/grunt-contrib-connect
module.exports = {
	server: {
		options: {
			port: 3000,
			livereload: true,
			open: true,
			base: '<%= paths.dist %>'
		}
	}
};