//https://github.com/stephenplusplus/grunt-wiredep

var bowerExclude = [
	//'jquery'
];

module.exports = {
	vendor: {
		src: [
			'<%= paths.doc %>includes/vendor-scripts.html'
		],

		options: {
			exclude: bowerExclude
		}
	}
};