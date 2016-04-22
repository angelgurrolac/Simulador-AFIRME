$(document).on("ready",inicio);

function inicio(){
	$("span.help-block").hide();
	$("#btn_enviar").click(validar);

	//$("#nombre").keypress(validar);
	//$("#nombre").keyup(validar);
	// $("#email").keyup(validar);
	// $("#fecha_nac").keyup(validar);
	// $("#estado_res").keyup(validar);

}


$(function(){
	$('#fecha_nac').datepicker();
	pickTime: false
});


function validar(){


	var email = document.getElementById("email").value;
	var inputPassword = document.getElementById("inputPassword").value;
	var confPassword = document.getElementById("confPassword").value;
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var male = document.getElementById("male").value;
	var female = document.getElementById("female").value;
	var agree = document.getElementById("agree").value;
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	//var expr =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
	
	console.log("entra");
	
	if(email == null || email.length == 0 || (!expr.test(email))){		
		
		$("#icon_valid").remove();
		$("#email").parent().parent().attr("class","form-group has-error has-feedback");
		$("#email").parent().children("span").text("Debe ingresar su correo electrónico").show();
		$("#email").parent().append("<span id='icon_valid'class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#email").focus();
		//$("#email").keyup(validar);
		
 	 return false;
	}

	else if(inputPassword == null || inputPassword.length == 0) {		
		
		$("#icon_valid").remove();
		$("#inputPassword").parent().parent().attr("class","form-group has-error has-feedback");
		$("#inputPassword").parent().children("span").text("Debe ingresar una contraseña").show();
		$("#inputPassword").parent().append("<span id='icon_valid'class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#inputPassword").focus();
 	return false;
	}

	else if(confPassword == null || confPassword.length == 0) {		
		
		$("#icon_valid").remove();
		$("#confPassword").parent().parent().attr("class","form-group has-error has-feedback");
		$("#confPassword").parent().children("span").text("Debe confirmar su contraseña").show();
		$("#confPassword").parent().append("<span id='icon_valid'class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#confPassword").focus();
 	return false;
	}

	else if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
		$("#icon_valid").remove();
		$("#nombre").parent().parent().attr("class","form-group has-error has-feedback");
		$("#nombre").parent().children("span").text("Debe ingresar su nombre").show();
		$("#nombre").parent().append("<span id='icon_valid'class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#nombre").focus();
		//$("#nombre").keyup(validar);
		return false;
	}

	else if (!isNaN(nombre)) {
		$("#icon_valid").remove();
		$("#nombre").parent().parent().attr("class","form-group has-error has-feedback");
		$("#nombre").parent().children("span").text("Debe ingresar su nombre").show();
		$("#nombre").parent().append("<span id='icon_valid' class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#nombre").focus();
		//$("#nombre").keyup(validar);
		return false;
	}
	
	else if(apellido == null || apellido.length == 0) {		
		
		$("#icon_valid").remove();
		$("#apellido").parent().parent().attr("class","form-group has-error has-feedback");
		$("#apellido").parent().children("span").text("Debe ingresar su fecha de nacimiento").show();
		$("#apellido").parent().append("<span id='icon_valid'class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#apellido").focus();
 	return false;
	}

 	else if (!isNaN(apellido)) {

		$("#icon_valid").remove();
		$("#apellido").parent().parent().attr("class","form-group has-error has-feedback");
		$("#apellido").parent().children("span").text("Debe ingresar su apellido").show();
		$("#apellido").parent().append("<span id='icon_valid' class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#apellido").focus();
		//$("#nombre").keyup(validar);
		return false;
	}	

	else if (!isNaN(male)) {

		$("#icon_valid").remove();
		$("#male").parent().parent().attr("class","form-group has-error has-feedback");
		$("#male").parent().children("span").text("Debe ingresar su apellido").show();
		$("#male").parent().append("<span id='icon_valid' class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#male").focus();
		//$("#nombre").keyup(validar);
		return false;
	}	

	else if (!isNaN(female)) {

		$("#icon_valid").remove();
		$("#female").parent().parent().attr("class","form-group has-error has-feedback");
		$("#female").parent().children("span").text("Debe ingresar su apellido").show();
		$("#female").parent().append("<span id='icon_valid' class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#female").focus();
		//$("#nombre").keyup(validar);
		return false;
	}	


	else if (!isNaN(agree)) {

		$("#icon_valid").remove();
		$("#agree").parent().parent().attr("class","form-group has-error has-feedback");
		$("#agree").parent().children("span").text("Debe ingresar su apellido").show();
		$("#agree").parent().append("<span id='icon_valid' class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#agree").focus();
		//$("#nombre").keyup(validar);
		return false;
	}	

	else{

		$("#icon_valid").remove();
		$("#email").parent().parent().attr("class","form-group has-success has-feedback");
		$("#email").parent().children("span").text("").hide();
		$("#email").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");

		$("#icon_valid").remove();
		$("#inputPassword").parent().parent().attr("class","form-group has-success has-feedback");
		$("#inputPassword").parent().children("span").text("").hide();
		$("#inputPassword").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");

		$("#icon_valid").remove();
		$("#confPassword").parent().parent().attr("class","form-group has-success has-feedback");
		$("#confPassword").parent().children("span").text("").hide();
		$("#confPassword").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");


		$("#icon_valid").remove();
		$("#nombre").parent().parent().attr("class","form-group has-success has-feedback");
		$("#nombre").parent().children("span").text("").hide();
		$("#nombre").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");

		 
		 $("#icon_valid").remove();
		 $("#apellido").parent().parent().attr("class","form-group has-success has-feedback");
		 $("#apellido").parent().children("span").text("").hide();
		 $("#apellido").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");

		 $("#icon_valid").remove();
		 $("#male").parent().parent().attr("class","form-group has-success has-feedback");
		 $("#male").parent().children("span").text("").hide();
		 $("#male").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");

		 $("#icon_valid").remove();
		 $("#female").parent().parent().attr("class","form-group has-success has-feedback");
		 $("#female").parent().children("span").text("").hide();
		 $("#female").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");

		 $("#icon_valid").remove();
		 $("#agree").parent().parent().attr("class","form-group has-success has-feedback");
		 $("#agree").parent().children("span").text("").hide();
		 $("#agree").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");

		return true;
		
	}
}	
