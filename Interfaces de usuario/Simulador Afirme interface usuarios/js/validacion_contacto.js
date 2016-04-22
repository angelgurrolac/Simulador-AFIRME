
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


	
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var fecha_nac = document.getElementById("fecha_nac").value;
	var estado_res = document.getElementById("estado_res").value;
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	//var expr =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
	
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
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
	/*else if(email == null || email.length == 0 || !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {*/

	else if(email == null || email.length == 0 || (!expr.test(email))){		
		
		$("#icon_valid").remove();
		$("#email").parent().parent().attr("class","form-group has-error has-feedback");
		$("#email").parent().children("span").text("Debe ingresar su correo electrónico").show();
		$("#email").parent().append("<span id='icon_valid'class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#email").focus();
		//$("#email").keyup(validar);
		
 	 return false;
	}

	else if(fecha_nac == null || fecha_nac.length == 0) {		
		
		$("#icon_valid").remove();
		$("#fecha_nac").parent().parent().attr("class","form-group has-error has-feedback");
		$("#fecha_nac").parent().children("span").text("Debe ingresar su fecha de nacimiento").show();
		$("#fecha_nac").parent().append("<span id='icon_valid'class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#fecha_nac").focus();
 	return false;
	}

	else if(estado_res == null || estado_res.length == 0) {		
		
		$("#icon_valid").remove();
		$("#estado_res").parent().parent().attr("class","form-group has-error has-feedback");
		$("#estado_res").parent().children("span").text("Debe ingresar su estado de residencia").show();
		$("#estado_res").parent().append("<span id='icon_valid'class='glyphicon glyphicon-remove form-control-feedback'></span>");
		$("#estado_res").focus();
 	return false;
	}
	else{
		$("#icon_valid").remove();
		$("#nombre").parent().parent().attr("class","form-group has-success has-feedback");
		$("#nombre").parent().children("span").text("").hide();
		$("#nombre").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");

		 $("#icon_valid").remove();
		 $("#email").parent().parent().attr("class","form-group has-success has-feedback");
		 $("#email").parent().children("span").text("").hide();
		 $("#email").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");

		 $("#icon_valid").remove();
		 $("#fecha_nac").parent().parent().attr("class","form-group has-success has-feedback");
		 $("#fecha_nac").parent().children("span").text("").hide();
		 $("#fecha_nac").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");

		 $("#icon_valid").remove();
		 $("#estado_res").parent().parent().attr("class","form-group has-success has-feedback");
		 $("#estado_res").parent().children("span").text("").hide();
		 $("#estado_res").parent().append("<span id='icon_valid' class='glyphicon glyphicon-ok form-control-feedback'></span>");

		return true;
		
	}
}	



