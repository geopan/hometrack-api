'use strict';

module.exports = function(grunt) {
  // Optional, required in future dev
  var localConfig;
  try {
    localConfig = require('./config/local.env');
  } catch (e) {
    localConfig = {};
  }

  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt, {
    express: 'grunt-express-server'
  });

  // Project configuration.
  grunt.initConfig({

    // Project settings
    pkg: grunt.file.readJSON('package.json'),
    env: {
      dev: {
        NODE_ENV: 'development'
      },
      testing: {
        NODE_ENV: 'testing'
      },
      staging: {
        NODE_ENV: 'staging'
      },
      prod: {
        NODE_ENV: 'production'
      }
    },
    express: {
      options: {
        port: process.env.PORT || 9000
      },
      dev: {
        options: {
          script: 'app.js',
          debug: false
        }
      },
      prod: {
        options: {
          script: 'app.js'
        }
      }
    },
    watch: {
      scripts: {
        files: [
          'api/**/*.js', 'config/**/*.js', 'compoments/**/*.js', '*.js'
        ],
        options: {
          spawn: false
        }
      },
      gruntfile: {
        files: ['gruntfile.js']
      },
      express: {
        files: [
          'api/**/*.js', 'config/**/*.js', 'components/**/*.js', '*.js'
        ],
        tasks: [
          'express:dev'
        ],
        options: {
          livereload: true,
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    },

    mochaTest: {
      options: {
        reporter: 'spec',
        //require: 'mocha.conf.js',
        timeout: 5000 // set default mocha spec timeout
      },
      test: {
        src: ['api/**/*.test.js']
      }
    }

  });

  // Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function() {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function() {
      grunt.log.writeln('Done waiting!');
      done();
    }, 1500);
  });

  // Watch task.
  //grunt.registerTask('serve', ['env:dev', 'jshint:dev', 'express:dev', 'wait', 'watch']);
  grunt.registerTask('serve', ['env:dev', 'express:dev', 'wait', 'watch']);

  grunt.registerTask('server', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', ['env:testing', 'mochaTest']);

};
