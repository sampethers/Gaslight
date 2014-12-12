$(document).ready(function(){
// Date Counter
	// $("#counter").counter({
	// 	autoStart: true,
	// 	duration: 6000,
	// 	countFrom: 2014,
	// 	countTo: 1964,
	// 	runOnce: true,
	// 	placeholder: "1964",
	// 	easing: "easeInOutCubic",
	// 	onStart: function() {},
	// 		onComplete: function() {},
	// 		numberFormatter:
	// 		function(number) {
	// 			return "$ " + number;
	// 		}
	// });

//Responsive Menu

	// $('.responsive-menu').click(function(){
	// 	$('.navbarMobile').slideToggle(200,'linear');
	// });

// //Main Menu Dropdown

// 	$('nav .main-navbar .navbar-nav > li').hover(function(){
// 		$(this).toggleClass('nav-hovered');
// 	});

// ScrollTop Positions

	$(window).on('scroll', function() {
	    var y_scroll_pos = window.pageYOffset;
	    var windowHeight = $(window.top).height();
	    var x_scroll_pos = $('.wrapper').width()
	    var footerHeight = $('footer').height();
	    var headerHeight = $('header').height();
	    var bodyHeight = $('body').height();
	    var scrollAndWindow = y_scroll_pos + windowHeight;
	    var bodyLessFooter = bodyHeight - footerHeight;
	    var sideContent = $('aside .nonAd').height();
	    var headerHeight = $('header').height();
	    var nonAdHeight = $('.nonAd').height() + 10;
	    var headerHeightAndNonAd = nonAdHeight + headerHeight;
	    var ScrollLessWindow = scrollAndWindow - windowHeight;

	    if(ScrollLessWindow <= headerHeightAndNonAd | bodyHeight < 1600){
	    	$('.side-ad').removeClass('fixedTop').removeClass('fixedBottom');
	    }
	    else if (ScrollLessWindow > headerHeightAndNonAd){
		    if(scrollAndWindow > bodyLessFooter){
		    	$('.side-ad').addClass('fixedBottom').removeClass('fixedTop');
		    }
		    if(scrollAndWindow < bodyLessFooter){
		    	$('.side-ad').addClass('fixedTop').removeClass('fixedBottom');
		    }
	    }
	});


//Scroll to the top 

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

//Main Carousel

	$('.recent-activity').hover(function(){
		$(this).find('p').slideToggle();
		$(this).find('.feature-image').toggleClass('feature-image-hovered');
		$(this).find('.btn_recent').toggleClass('btn_recent-hovered');
	});

	$("#home-slider").owlCarousel({
      	navigation : true,
      	slideSpeed : 300,
      	paginationSpeed : 400,
      	singleItem:true,
      	autoPlay:false
    });

});












