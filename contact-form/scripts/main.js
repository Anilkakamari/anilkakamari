$(function(){

	$(".input-group > input, textarea").focus(function(e){
		$(this).parent().addClass("input-group-focus");
	}).blur(function(e){
		$(this).parent().removeClass("input-group-focus");
	});

});
