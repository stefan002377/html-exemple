jQuery(document).ready(function(){
	
	$(window).load(function() {
		
		// menu drop-down
		$('.menu-top li').hover(function(){
			$(this).children('a').addClass('hover');
			$(this).children('.sub-menu').stop().slideDown(200);
		}, function(){
			$(this).children('a').removeClass('hover');
			$(this).children('.sub-menu').stop().slideUp(200);
		});
		$('.menu-top-mob-container .icon-menu').click(function(e) {
			e.preventDefault();
		}).toggle(function(){
			$(this).parent('.menu-top-mob-container').children('.menu-top-mob').stop().slideDown(200);
		}, function(){
			$(this).parent('.menu-top-mob-container').children('.menu-top-mob').stop().slideUp(200);
		});
		
		// owl-carousel
		$(".main-carousel").owlCarousel({
			// Most important owl features
			itemsTabletSmall: true,
			singleItem : true,
			itemsScaleUp : true,
			//Basic Speeds
			slideSpeed : 200,
			paginationSpeed : 800,
			rewindSpeed : 1000,
			//Autoplay
			autoPlay : false,
			stopOnHover : true,
			// Navigation
			navigation : true,
			navigationText : ["",""],
			rewindNav : true,
			scrollPerPage : false,
			//Pagination
			pagination : true,
			paginationNumbers: false,
			// Responsive
			responsive: true,
			responsiveRefreshRate : 100,
			responsiveBaseWidth: window,
			// CSS Styles
			baseClass : "owl-carousel",
			theme : "owl-theme",
			//Lazy load
			lazyLoad : false,
			lazyFollow : true,
			lazyEffect : "fade",
			//Auto height
			autoHeight : true,
			//JSON
			jsonPath : false,
			jsonSuccess : false,
			//Mouse Events
			dragBeforeAnimFinish : true,
			mouseDrag : true,
			touchDrag : true,
			//Transitions
			transitionStyle : "fade", // "fade", "backSlide", "goDown" and "fadeUp"
			// Other
			addClassActive : true
		});
		$(".articles-carousel").owlCarousel({
			// Most important owl features
			itemsTabletSmall: true,
			singleItem : true,
			itemsScaleUp : true,
			//Basic Speeds
			slideSpeed : 1000,
			paginationSpeed : 800,
			rewindSpeed : 1000,
			//Autoplay
			autoPlay : true,
			stopOnHover : true,
			// Navigation
			navigation : true,
			navigationText : ["",""],
			rewindNav : true,
			scrollPerPage : false,
			//Pagination
			pagination : false,
			paginationNumbers: false,
			// Responsive
			responsive: true,
			responsiveRefreshRate : 100,
			responsiveBaseWidth: window,
			// CSS Styles
			baseClass : "owl-carousel",
			theme : "owl-theme",
			//Lazy load
			lazyLoad : false,
			lazyFollow : true,
			lazyEffect : "fade",
			//Auto height
			autoHeight : true,
			//JSON
			jsonPath : false,
			jsonSuccess : false,
			//Mouse Events
			dragBeforeAnimFinish : true,
			mouseDrag : true,
			touchDrag : true,
			//Transitions
			transitionStyle : false, // "fade", "backSlide", "goDown" and "fadeUp"
			// Other
			addClassActive : false
		});
		$(".product-carousel").owlCarousel({
			// Most important owl features
			itemsTabletSmall: true,
			singleItem : true,
			itemsScaleUp : true,
			//Basic Speeds
			slideSpeed : 1000,
			paginationSpeed : 800,
			rewindSpeed : 1000,
			//Autoplay
			autoPlay : true,
			stopOnHover : true,
			// Navigation
			navigation : true,
			navigationText : ["",""],
			rewindNav : true,
			scrollPerPage : false,
			//Pagination
			pagination : false,
			paginationNumbers: false,
			// Responsive
			responsive: true,
			responsiveRefreshRate : 100,
			responsiveBaseWidth: window,
			// CSS Styles
			baseClass : "owl-carousel",
			theme : "owl-theme",
			//Lazy load
			lazyLoad : false,
			lazyFollow : true,
			lazyEffect : "fade",
			//Auto height
			autoHeight : true,
			//JSON
			jsonPath : false,
			jsonSuccess : false,
			//Mouse Events
			dragBeforeAnimFinish : true,
			mouseDrag : true,
			touchDrag : true,
			//Transitions
			transitionStyle : "fade", // "fade", "backSlide", "goDown" and "fadeUp"
			// Other
			addClassActive : false
		});
		$(".thumbnail-carousel").owlCarousel({
			 // Most important owl features
			items : 7,
			itemsCustom : false,
			itemsDesktop : [1199,7],
			itemsDesktopSmall : [980,6],
			itemsTablet: [768,5],
			itemsTabletSmall: true,
			itemsMobile : [479,3],
			singleItem : false,
			itemsScaleUp : false,
			//Basic Speeds
			slideSpeed : 1000,
			paginationSpeed : 800,
			rewindSpeed : 1000,
			//Autoplay
			autoPlay : false,
			stopOnHover : true,
			// Navigation
			navigation : false,
			navigationText : ["",""],
			rewindNav : true,
			scrollPerPage : false,
			//Pagination
			pagination : false,
			paginationNumbers: false,
			// Responsive
			responsive: true,
			responsiveRefreshRate : 100,
			responsiveBaseWidth: window,
			// CSS Styles
			baseClass : "owl-carousel",
			theme : "owl-theme",
			//Lazy load
			lazyLoad : false,
			lazyFollow : true,
			lazyEffect : "fade",
			//Auto height
			autoHeight : true,
			//JSON
			jsonPath : false,
			jsonSuccess : false,
			//Mouse Events
			dragBeforeAnimFinish : true,
			mouseDrag : true,
			touchDrag : true,
			//Transitions
			transitionStyle : false, // "fade", "backSlide", "goDown" and "fadeUp"
			// Other
			addClassActive : false
		});
		var owlArticle = $(".product-carousel").data('owlCarousel');
		$('.thumbnail-carousel a').click(function(e) {
			e.preventDefault();
			var goToIndex = $(this).attr('data-value');
			owlArticle.goTo(goToIndex);
		}); //Final eventObject	
		$(".team-carousel").owlCarousel({
			 // Most important owl features
			items : 4,
			itemsCustom : false,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [980,4],
			itemsTablet: [768,3],
			itemsTabletSmall: true,
			itemsMobile : [479,1],
			singleItem : false,
			itemsScaleUp : true,
			//Basic Speeds
			slideSpeed : 1000,
			paginationSpeed : 800,
			rewindSpeed : 1000,
			//Autoplay
			autoPlay : true,
			stopOnHover : true,
			// Navigation
			navigation : true,
			navigationText : ["",""],
			rewindNav : true,
			scrollPerPage : false,
			//Pagination
			pagination : false,
			paginationNumbers: false,
			// Responsive
			responsive: true,
			responsiveRefreshRate : 100,
			responsiveBaseWidth: window,
			// CSS Styles
			baseClass : "owl-carousel",
			theme : "owl-theme",
			//Lazy load
			lazyLoad : false,
			lazyFollow : true,
			lazyEffect : "fade",
			//Auto height
			autoHeight : true,
			//JSON
			jsonPath : false,
			jsonSuccess : false,
			//Mouse Events
			dragBeforeAnimFinish : true,
			mouseDrag : true,
			touchDrag : true,
			//Transitions
			transitionStyle : false, // "fade", "backSlide", "goDown" and "fadeUp"
			// Other
			addClassActive : false
		});
		
		// selectmenu
		$('.select').selectmenu({
			width: 'auto'
		});
		// masonry
		$('.masonry-container').masonry({
			itemSelector: '.masonry-item'
		});
		$('.list-style-tick').masonry({
			itemSelector: 'li'
		});
		
		// article-image hover
		$('.article-image').hover(function(){
			$(this).children('.overlay').stop().fadeIn(300);
		}, function(){
			$(this).children('.overlay').stop().fadeOut(300);
		});
		
		// input focus
		$(".search-form .wpcf7-text, .wpcf7-form .wpcf7-text, .wpcf7-form .wpcf7-textarea, .searchform #s").focus(function(){
			var value = $(this).attr("value");
			if (value == "")
			var attrfor = $(this).attr('id');
			$("label[for=" + attrfor + "]").css({"display":"none"});
		});
		$(".search-form .wpcf7-text, .wpcf7-form .wpcf7-text, .wpcf7-form .wpcf7-textarea, .searchform #s").blur(function(){
			var value = $(this).attr("value");
			if (value == "")
			var attrfor = $(this).attr('id');
			$("label[for=" + attrfor + "]").css({"display":"block"});
		});	
		
		// some css fix
		$('.social li:first-child, .menu-top .sub-menu li:first-child, .meta-listing li:first-child, .article-image .overlay .fa:first-child, .menu-sidebar li:first-child, .popular-post li:first-child, .sidebar-container ul li:first-child').addClass('first-child');
		$('.social li:last-child, .menu-top .sub-menu li:last-child, .meta-listing li:last-child, .article-image .overlay .fa:last-child, .menu-sidebar li:last-child, .popular-post li:last-child, .text-box p:last-child, .menu-footer li:last-child, .article-agent-profile .profile-group:last-child, .article-agent-profile p:last-child, .contact-info .contact-info-row:last-child, .sidebar-container ul li:last-child').addClass('last-child');
		$('.search-form .wpcf7-submit, #searchsubmit').attr({"value":""});
		
	}); // Final load
	
}); // Final ready