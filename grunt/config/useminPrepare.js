module.exports = {
	vendor: {
		html: '<%= paths.doc %>includes/vendor-scripts.html',
		options: {
			dest: '<%= yeoman.dist %>',
			flow: {
				steps: {
					js: [
						'concat',
						'uglifyjs'
					]
				},
				post: {}
			}
		}
	}
};