var utils = window.fizzyUIUtils;

var carousel = document.querySelector('.carousel-projects');
var flkty = new Flickity( carousel, {
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true
});

// previous
var previousButton = document.querySelector('.carousel-prev');
previousButton.addEventListener( 'click', function() {
  flkty.previous();
});

// next
var nextButton = document.querySelector('.carousel-next');
nextButton.addEventListener( 'click', function() {
  flkty.next();
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

// flkty.on( 'scroll', function() {
//   flkty.slides.forEach( function( slide, i ) {
//     var img = imgs[i];
//     var x = ( slide.target + flkty.x ) * -1/3;
//     img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//   });
// });
