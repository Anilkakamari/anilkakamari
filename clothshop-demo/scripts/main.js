$(function(){

	/* top menu click event with background color change(assigning active class)*/
	$('.nav.navbar-nav > li').on('click', function(e) {
		$('.nav.navbar-nav > li').removeClass('active');
		$(this).addClass('active');
	});

	/*hide  navigation bar, after clicking menu item in mobile view*/
	$('.nav a').on('click', function(){ 
		if($('.navbar-toggle').css('display') !='none'){
			$(".navbar-toggle").trigger( "click" );
		}
	});


	/* rotate animation snippet for circle at beginning of page*/
	var shop = $('#shop');
	function rotate() {
		shop.animate({rotate: '360'}, 5000, 'linear', function() {
			rotate();
		});
	}
	rotate();


	/* OWL carousel snippet */
	$("#owl-gallery").owlCarousel({

	autoPlay: 3000, //Set AutoPlay to 3 seconds

		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
	});

	/* scrollbar up */
	$('#topbar').scrollupbar();

	
	
	/*--------- Contact Form Handler -----------*/
	$("input,textarea").jqBootstrapValidation(
	{
		preventSubmit: true,
		submitError: function($form, event, errors) {
		},
		submitSuccess: function($form, event) {
			event.preventDefault(); 
			var name = $("input#name").val();
			var email = $("input#email").val();
			var mobilePhone = $("input#mobilePhone").val();
			var message = $("textarea#message").val();
			var firstName = name; 
			if (firstName.indexOf(' ') >= 0) {
				firstName = name.split(' ').slice(0, -1).join(' ');
			}
			$.ajax({
				url: "contact.php",
				type: "POST",
				data: {name: name, email: email, mobilePhone: mobilePhone, message: message},
				cache: false,
				success: function() {

					$('#success').html("<div class='alert alert-success'>");
					$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
					.append( "</button>");
					$('#success > .alert-success')
					.append("<strong>Your message has been sent. </strong>");
					$('#success > .alert-success')
					.append('</div>');

					$('#contactForm').trigger("reset");
				},
				error: function() {

					$('#success').html("<div class='alert alert-danger'>");
					$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
					.append( "</button>");
					$('#success > .alert-danger').append("<strong>Sorry "+firstName+" it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com'>me@example.com</a> ? Sorry for the inconvenience!");
					$('#success > .alert-danger').append('</div>');

					$('#contactForm').trigger("reset");
				},
			});
		},
		filter: function() {
			return $(this).is(":visible");
		},
		});
		$("a[data-toggle=\"tab\"]").click(function(e) {
			e.preventDefault();
			$(this).tab("show");
		});
		});

		$('#name').focus(function() {
			$('#success').html('');
		});
