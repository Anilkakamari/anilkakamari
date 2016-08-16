$(function(){

	
	/*$(".custom-nav > ul > li > a").on("click",function(e){
		$(".custom-nav > ul > li > a").removeClass("active");
		$(this).addClass("active");	
	});

	$(".custom-nav > ul > #logo").on("click",function(e){
	$(".custom-nav > ul > li > a").removeClass("active");
		//$(this).addClass("active");	
	});*/


	var lastScrollTop = 0;
	var $scrollingDiv = $(".land-target");
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		if (st > lastScrollTop){
			// downscroll code
			$scrollingDiv
			.stop()
			.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, 2000 );
			//alert(st);			
		} else {
			// upcroll code
			$scrollingDiv
			.stop()
			.animate({"marginTop": ($(window).scrollTop() - 30) + "px"}, 2000 );			
		}
		lastScrollTop = st;
	});

	//scroll smoothly to section(using id). 
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	
});
