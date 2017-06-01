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
* Delete the following lines of code for causing forced asynchronization.
```
function determineDx (elem, size) {
    var oldWidth = elem.offsetWidth;
    var windowWidth = document.querySelector("#randomPizzas").offsetWidth;
    var oldSize = oldWidth / windowWidth;

    // Changes the slider value to a percent width
    function sizeSwitcher (size) {
      switch(size) {
        case "1":
          return 0.25;
        case "2":
          return 0.3333;
        case "3":
          return 0.5;
        default:
          console.log("bug in sizeSwitcher");
      }
    }

    var newSize = sizeSwitcher(size);
    var dx = (newSize - oldSize) * windowWidth;

    return dx;
  }
 ```
 * The above lines of code were replaced with the following.
 ```
	function changePizzaSizes(size) {
    switch(size) {
      case "1":
        newwidth = 25;
        break;
      case "2":
        newwidth = 33.3;
        break;
      case "3":
        newwidth = 50;
        break;
      default:
        console.log("bug in sizeSwitcher");
    }

    var randomPizzas = document.querySelectorAll(".randomPizzaContainer");

    for (var i = 0; i < randomPizzas.length; i++) {
      randomPizzas[i].style.width = newwidth + '%';
    }

  }
 ```
* Add width and height attributes to pizza images to main.js 
```
	pizzaImage.style.width = "100%";
  pizzaImage.style.height = "auto";
```
* Creat a variable and move the performance with layout out of for loops in updatePositions().
```
var foo = document.body.scrollTop / 1250;
```
* Creat a variable and move the query selector function out of for loop while Generating sliding pizzas during page load.
```
var movingPizzas1Container = document.querySelector("#movingPizzas1");
```
* Calculate the number of sliding pizzas to generate based on the screen height, row height, and number of columns instead of giving it a large number of 200.
```
var numPizzas = Math.floor((screen.height / s) * cols);
```
* Change the value of the height attribute for both #pizza0 and #pizza1 in #randomPizzas to "auto" in pizza.html
* minify css, js, and html
* inline critical CSS and defer loading the remaining styles until after the above-the-fold content.
* enable compression with the use of mod_deflate