// https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
	dist: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= paths.doc %>assets/',
			src: [
				'*.{ico,png}',
				'.htaccess',
				'assets/img/**/*.{jpeg,jpg,png,svg,webp}',
				'assets/fonts/*',
				'assets/icons/*.{svg,png}'
			],
			dest: '<%= paths.dist %>assets/'
		}]
	},
	zeroclipboard: {
		files: [{
			src: ['<%= paths.vendor %>zeroclipboard/dist/ZeroClipboard.swf'],
			dest: '<%= paths.dist %>assets/js/ZeroClipboard.swf'
		}]
	}
};
