$(document).ready(function() {
  var $nickNameLocal = localStorage.getItem('nick-name');
  console.log($nickNameLocal);
  var $passwordLocal = localStorage.getItem('password');
  var $nickName = $('#nick-name');
  var $password = $('#password');
  var $btnLogin = $('.button-Entrar');
  // función que valida nickname
  $nickName.on('keyup', function() {
    if ($nickName .val() == $nickNameLocal) {
      console.log($nickName);
    }
  });
  // función que valida password
  $password.on('keyup', function() {
    if ($password .val() == $passwordLocal) {
      $btnLogin.attr('disabled', false);
    } else {
      $btnLogin.attr('disabled', true);
    }
  });
});
