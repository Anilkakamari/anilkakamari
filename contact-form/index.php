<?php 

	error_reporting(-1);

	$result='<div style="content:""; "></div>';

	if (isset($_POST['submit'])) { 
			if (mail("santu.parashetti@gmail.com","Messge from website",
				"Name:".$_POST['fullname']."
				Email:".$_POST['email']."
				Website:".$_POST['website']."
				Messaage:".$_POST['message'])){

			$result='<div class="mail-result success">
			<span class="glyphicon glyphicon-ok-circle"></span> 
			Your mail sent! Thank You. I\'ll be in touch.</div>';

		}
		else{

			$result='<div class="mail-result failure">
			<span class="glyphicon glyphicon-remove-circle"></span>
			Sorry, Error while sending your message.</div>';				

		}
	}

?>

<DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title> CONTACT FORM | santoshparashetti.me</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		

		<link rel="stylesheet" href="css/bootstrap.css">
		<link rel="stylesheet" href="css/vendors/jquery-ui.css">
		<link rel="stylesheet" href="css/main.css">

		<script src="bower_components/modernizr/modernizr.js"></script>

		<script>window.jQuery || document.write('<script src="scripts/jquery.min.js"><\/script>')</script>

		
		<script> 
		// inform users about browser-updates 
			var $buoop = {vs:{i:9,f:20,o:15,s:5.1},c:2}; 
			function $buo_f(){ 
			 var e = document.createElement("script"); 
			 e.src = "//browser-update.org/update.js"; 
			 document.body.appendChild(e);
			};
			try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
			catch(e){window.attachEvent("onload", $buo_f)}
		</script> 
	</head>
	<body>

		<div class="container">
			<div class="row vertical-top">
				<div class="col-md-4 col-md-offset-4">
					<div class="panel">
						<div class="panel-heading">
							<div class="row-fluid">
								<img src="images/contact.png" width="160" 
								class="responsive-image">
							</div>							
						</div>	
						<div class="panel-body">
							<form class="form-contact"  method="POST">

								<fieldset>
								 <?php echo $result; ?> 
									<div class="input-group default-input-group">
										<span class="input-group-addon glyphicon glyphicon-user"></span>
										<input class="form-control" 
										placeholder="Fullname" name="fullname" 
										id="fullname" type="text" required autocomplete="off"/>
									</div>
									<div class="input-group">
										<span class="input-group-addon glyphicon glyphicon-envelope"></span>
										<input class="form-control" 
										placeholder="Email address" id="email" 
										name="email" type="email" required autocomplete="off"/>
									</div>
									<div class="input-group">
										<span class="input-group-addon glyphicon glyphicon-link"></span>
										<input class="form-control" 
										placeholder="Your website (optional)" id="website" name="website" type="url" 
										pattern="https?://.+" autocomplete="off"/>
									</div>
									<div class="input-group">
										<span class="input-group-addon glyphicon glyphicon-pencil"></span>
										<textarea rows="5" class="form-control" placeholder="Enter Message" id="message" name="message" required autocomplete="off"></textarea>	
									</div>
									<input class="btn btn-warning btn-block" 
									type="submit" name="submit"   value="Send Message"/>	
								</fieldset>
							</form>
						</div>
					</div>					
				</div>
			</div>
		</div>	




		<script type="text/javascript" src="scripts/main.js"></script>
		<script type="text/javascript" src="scripts/bootstrap.min.js"></script>
		<script type="text/javascript" src="scripts/jquery.min.js"></script>
		<script type="text/javascript" src="scripts/jquery-ui.min.js"></script>
		<script type="text/javascript" src="scripts/bootstrap-transition.js">
		</script> 
	</body>
</html>




