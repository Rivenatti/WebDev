jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

$( "#register" ).validate({
  rules: {
    
    // Login Validation
    formLogin: {
      required: true,
      minlength: 3
    },
      
    formPassword: {
      required: true,
      minlength: 4,
      maxlength: 20
    },
    
    formConfirmPassword: {
        required: true,
        equalTo: "#formPassword"
    },
    
    // Passwords Validation
    
    // Email Validation
    formEmail: {
        required: true,
      email: true
    },
      
      errorPlacement: function(label, element) {
        label.addClass('arrow');
        label.insertAfter(element);
    },
    wrapper: 'span'
  }
});