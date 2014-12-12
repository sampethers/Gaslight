(function(){
	var app = angular.module('main', [ ]);

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});
	app.controller("FollowController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

	app.directive('footerNav', function(){
		return {
			restrict: 'E',
			templateUrl: 'footernav.html'
		}
	});

	app.directive('headerContent', function(){
		return {
			restrict: 'E',
			templateUrl: 'header.html',
			scope: true,
			link: function(scope,elem,attr){
          			$('nav .main-navbar .navbar-nav > li').hover(function(){
					$(this).toggleClass('nav-hovered');
					});
					$("#counter").counter({
						autoStart: true,
						duration: 6000,
						countFrom: 2014,
						countTo: 1964,
						runOnce: true,
						placeholder: "1964",
						easing: "easeInOutCubic",
						onStart: function() {},
							onComplete: function() {},
							numberFormatter:
							function(number) {
								return "$ " + number;
							}
					});
					$('.responsive-menu').click(function(){
					$('.navbarMobile').slideToggle(200,'linear');
				});
      		}
		}
	});

	// // app.controller('SliderController',function(){
	// // 	this.posts = story;

	// // });

	// // var story = {
	// // 	type: 'Article',
	// // 	headline: "Sam Cooke shot dead at 33",
	// // 	excerpt: "Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo | <a href="">Read more</a>",
	// // }

	// app.controller('SliderController',function(){
	// 	this.product = content;

	// });

	// var content = {
	// 	type: 'Article',
	// 	headline: 'Sam Cooke shot dead at 33',
	// 	description:"Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
	// }


}());