//https://github.com/stephenplusplus/grunt-wiredep

var bowerExclude = [
	//'jquery'
];

module.exports = {
	vendor: {
		src: [
			'<%= paths.doc %>layouts/*.html'
		],

		options: {
			exclude: bowerExclude
		}
	}
};