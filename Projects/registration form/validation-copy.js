$(document).ready(function(){
    $("submit").on("click", function(){
        var login = document.getElementById('login').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        var email = document.getElementById('email').value;
        
        // hiding error messages
        $('.errorMsg').hide();
        
        if(checkLogin(login) == false){
            $('#errorLogin').show();
            return false;
        } else if(checkPassword(password) == false){
            $('#errorPassword').show();
            return false;
        } else if(checkPassword(confirmPassword) == false){
            $('errorConfirmPassword').show();
            return false;
        } else if(checkEmail(email) == false){
            $('errorEmail').show();
            return false;
        } else{
            alert("successful!");
        }
    });
});

    // RegExp Login
function checkLogin(login){

    var pattern = /^[a-z0-9_-]{5,15}$/;
    if(pattern.test(login)){
        return true;
    }else{
        return false;
    }
}

    // RegExp Email
function checkEmail(email){

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(pattern.test(email)){
            return true;
        } else {
            return false;
        }
    }

    // RegExp Password
function checkPassword(password){
 
    var pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    if(pattern.test(password)){
        return true;
    }else{
        return false;
    }
}