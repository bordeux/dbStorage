module.exports = function(grunt) {
    var banner = '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
        banner: banner
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: banner
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },
    'http-server': {
        'dev': {
            root: './',
            port: 8282,
            host: "127.0.0.1",
            cache: 1,
            showDir : true,
            autoIndex: true,
            defaultExt: "html",
            runInBackground: false

        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-http-server');
  
  grunt.registerTask('default', ['concat', 'uglify']);
  
  grunt.registerTask('watch', ['watch']);
  
  grunt.registerTask('server', ['http-server']);

};