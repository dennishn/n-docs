// https://github.com/gruntjs/grunt-contrib-concat
module.exports = {
  dist: {
    files: {
      '<%= paths.dist %>assets/js/nodes.js': '<%= files.js %>'
    }
  }
};