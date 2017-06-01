# PIZZA WEB PAGE - Undacity Web Page optimization Project

## Development Workflow
The following grunt tasks are added to the development workflow to help developers to share and reuse code while the code is being updated upon sharing.
* grunt-contrib-compass – use to compile Sass to CSS using Compass.
* grunt-contrib-concat – use to concatenate files.
* grunt-contrib-cssmin – use to minify CSS.
* grunt-responsive-images – use to automate the creation of images with different sizes.
* grunt-contrib-jshint – use to detect errors and potential problems in code.
* grunt-contrib-sass – use to compile Sass to CSS.
* grunt-contrib-uglify – use to minify files.
* grunt-contrib-watch – use to run tasks whenever watched files change.
* grunt-contrib-htmlmin - reduce the file size for html


## Optimization Measures 
The following adjustments were made to the files incrementally to achieve the 94 pagespeed.
* add width and height attributes to images
* minify css, js, and html
* inline critical CSS and defer loading the remaining styles until after the above-the-fold content.
* enable compression with the use of mod_deflate