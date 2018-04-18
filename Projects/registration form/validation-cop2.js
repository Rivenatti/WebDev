$(function(){
    $("#formErrorLogin").hide();
    $("#formErrorPassword").hide();
    $("#formErrorConfirmPassword").hide();
    $("#formErrorEmail").hide();
    
    var JsErrorLogin = false;
    var JsErrorPassword = false;
    var JsErrorConfirmPassword = false;
    var JsErrorEmail = false;

    $("#formLogin").focusout(function(){
		checkLogin();
	});
    
});
    
  function checkLogin(){
        
      var formLoginLength = $("#formLogin").val().length;
		
		if(formLoginLength < 5 || formLoginLength > 20) {
			$("#formErrorLogin").show();
			JsErrorLogin = true;
		} else {
			$("#formErrorLogin").hide();
		}
    }