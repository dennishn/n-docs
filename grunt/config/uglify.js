// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
  options: {
    preserveComments: 'some'
  },
  dist: {
    files: {
      '<%= paths.dist %>docs/assets/js/modernizr.js': ['<%= paths.vendor %>modernizr/modernizr.js'],
      '<%= paths.dist %>docs/assets/js/docs.js': ['<%= paths.doc %>assets/js/docs.js'],
      '<%= paths.dist %>docs/assets/js/nodes.js': ['<%= files.js %>']
    }
  },
  vendor: {
    files: {
      '<%= paths.dist %>assets/js/vendor/placeholder.js': '<%= paths.vendor %>jquery-placeholder/jquery.placeholder.js',
      '<%= paths.dist %>assets/js/vendor/fastclick.js': '<%= paths.vendor %>fastclick/lib/fastclick.js',
      '<%= paths.dist %>assets/js/vendor/jquery.cookie.js': '<%= paths.vendor %>jquery.cookie/jquery.cookie.js',
      '<%= paths.dist %>assets/js/vendor/jquery.js': '<%= paths.vendor %>jquery/dist/jquery.js',
      '<%= paths.dist %>assets/js/vendor/modernizr.js': '<%= paths.vendor %>modernizr/modernizr.js'
    }
  }
};