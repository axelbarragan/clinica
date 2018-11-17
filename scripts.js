/*main.js*/
$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
  	margin: 5,
    loop: true,
    items: 2,
    rtl: true,
    stagePadding: 40,
  });

  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
  	var stickyHeight = sticky.outerHeight();
  	var stickyTop = stickyWrapper.offset().top;
  	if (scrollElement.scrollTop() >= stickyTop) {
  		stickyWrapper.height(stickyHeight);
  		sticky.addClass("is-sticky");
  	} else {
  		sticky.removeClass("is-sticky");
  		stickyWrapper.height('auto');
    }
  };

  $('[data-toggle="sticky-onscroll"]').each(function () {
  	var sticky = $(this);
  	var stickyWrapper = $('<div>').addClass('sticky-wrapper');
  	sticky.before(stickyWrapper);
  	sticky.addClass('sticky');
  	$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
  		stickyToggle(sticky, stickyWrapper, $(this));
  	});
  	stickyToggle(sticky, stickyWrapper, $(window));
  });

  var scroll = new SmoothScroll('a[data-scroll]', {
  	speed: 500,
  	speedAsDuration: true,
  	offset: 100
  });

  /*Cerrar el menú después de dar algún "tap" (sólo moviles)*/
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });

  $( '#nav .navbar-nav a' ).on( 'click', function () {
  	$( '#nav .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
  	$( this ).parent( 'li' ).addClass( 'active' );
  });

});