module.exports = function(grunt) {
	
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		//Store the project settings
		pkg: grunt.file.readJSON('package.json'),

		responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: '_large_2x',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,svg}'],
          cwd: 'dist/images_src/',
          dest: 'dist/images/'
        }]
      }
    }, //responsive
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['dist/images'],
      },
    }, //clean
    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['dist/images']
        },
      },
    }, //mkdir
    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['dist/images_src/fixed/*.{gif,jpg,png,svg}'],
          dest: 'dist/images/',
          flatten: true,
        }]
      },
    }, //copy
    compass: {      
      dist: {        
        options: {      
          sassDir: '_/src/scss',
          cssDir: 'dist/css',
          environment: 'production'
        }
      },
      dev: {              
        options: {
          sassDir: '_/src/scss',
          cssDir: 'dist/css'
        }
      }
    }, //compass
    sass: {
      dist: {
          options: {                 
              compass: true,
          },
          files: {
              'dist/css/styles.css' : '_/src/scss/styles.scss'
          }
      }
    }, //sass
		concat: {
      options: {
        separator: ';',
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      dist: {
        src: ['_/src/js/*.js'],
        dest: 'dist/js/main.js',
      },
    }, //concat
    jshint: {
      files: ['gruntfile.js', '_/src/js/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    }, //jshint
    csslint: {
      // define the files to lint
      files: ['dist/css/*.css'],
      strict: {
        options: {
            "import": 2
        }
      }
    }, //csslint
		uglify: {
			my_target: {
				files: {
					"dist/js/main.min.js": ["_/src/js/*.js"]
				} //files
			} //my_target
		}, //uglify
    cssmin: {
      combine: {
        files: {
          'dist/css/styles.min.css': ['dist/css/*.css']
        }
      }
      /*
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['dist/css/*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
      */
    }, //cssmin
    watch: {
      scripts: {
        files: ["_/src/js/*.js"],
        tasks: ["uglify"]
      }, //scripts
      sass:{
          files: ['_/src/scss/styles.scss'],
          tasks: ['sass','cssmin']
      }, //sass
      html: {
        files: ["*.html"]
      } //html
    } //watch
	}); //initConfig
	grunt.registerTask("default",['uglify', 'clean', 'mkdir', 'copy', 'responsive_images','watch']);
}; // exports