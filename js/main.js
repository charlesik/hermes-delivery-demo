// new WOW().init();
// AOS.init({
//  	duration: 800,
//  	easing: 'slide'
//  });

(function($) {

	"use strict";




  
  
	var scrollbtn = $('#button');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			scrollbtn.addClass('show').fadeIn(1000);
		}else{
			scrollbtn.removeClass('show').fadeOut(1000);
		}
	});

	scrollbtn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top - 70
		}, 800);
	});





	var btn = $('#apply_notify');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 800) {
			btn.addClass('show').show('slow');
		}else{
			btn.removeClass('show').hide('slow');
		}
	});


	var socialbtn = $('#sociallinks');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 800) {
			socialbtn.addClass('show').fadeIn('slow');
		}else{
			socialbtn.removeClass('show').fadeOut('slow');
		}
	});


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
		event.preventDefault();

		var href = $.attr(this, 'href');

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 70
		}, 500, function() {
			// window.location.hash = href;
		});
		});

	};

	onePageClick();


	$(document).on('click', '.arrow-container a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
	});


	var hamb = $('.hamburger');
	var menuActive = false;
	var menu = $('.menu');


	initMenu();


	/* 

	5. Init Menu

	*/

	function initMenu()
	{
		if(hamb.length)
		{
			if(menu.length)
			{
				hamb.on('click', function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();
					}
				});	

				$('.menu_close').on('click', function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();
					}
				});
			}
		}
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}


	// scroll
	
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.transition-header'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	// jQuery(document).ready(function($) {
      $('.sponsor').owlCarousel({
        items: 4,
        nav:false,
        //animateOut: 'fadeOut',
		// navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		smartSpeed: 800,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 2000,
        navSpeed: 1000,
        paginationSpeed: 1000,
        slideSpeed: 1000,
        dots: false,
        responsive:{
            0:{
                items:3
            },
            650:{
                items:4
            },			
            1024:{
                items:4
            },
            1200:{
                items:5
            }
        }
      });

      $('.testimonial').owlCarousel({
        items: 4,
        nav:true,
        //animateOut: 'fadeOut',
		
		// navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		smartSpeed: 800,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 2000,
        navSpeed: 1000,
        paginationSpeed: 1000,
        slideSpeed: 1000,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            650:{
                items:2
            },			
            1024:{
                items:3
            },
            1200:{
                items:3
            }
        }
      });
    // });

	



		// :: 9.0 Sticky Active Code
		if ($.fn.sticky) {
			$(".transition-header").sticky({
				topSpacing: 0
			});
		}
	
	


})(jQuery);
