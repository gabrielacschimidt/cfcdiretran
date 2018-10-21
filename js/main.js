jQuery(document).ready(function(jQuery) {

	"use strict";

	// Main Navigation
    jQuery( '.navbar-toggler' ).on( 'click', function() {
        jQuery('.hamburger-menu').toggleClass('open');
        jQuery('.site-navigation').toggleClass('show');
        jQuery('body').toggleClass('show');
    });

    jQuery( '.site-navigation li a' ).on( 'click', function() {
        jQuery(this).toggleClass('open');
        jQuery('.site-navigation').toggleClass('show');
        jQuery('body').toggleClass('show');
    });

	// loader
	var loader = function() {
		setTimeout(function() { 
			if(jQuery('#ftco-loader').length > 0) {
				jQuery('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	jQuery( '.obrigado .close' ).on( 'click', function() {
		jQuery('.obrigado').fadeOut();
    });

	var mySwiper = new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        // loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">0' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

	
	// scroll
	var scrollWindow = function() {
		jQuery(window).scroll(function(){
			var jQueryw = jQuery(this),
					st = jQueryw.scrollTop(),
					navbar = jQuery('.ftco_navbar'),
					sd = jQuery('.js-scroll-wrap');

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


	// navigation
	
	jQuery('#ftco-navbar ul li a[href*="#"]:not([href="#"]), #saiba-mais, #cont-renov').click(function() {

	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	        var target = jQuery(this.hash);

	        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
	        if (target.length) {
	            jQuery('html, body').animate({
	                scrollTop: target.offset().top-120
	            }, 1000);
	            return false;
	        }
	    }
	});

	// magnific popup
	jQuery('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	});



});

