function checkMdp(){
  var password = document.getElementById('password');
  var confirmPassword = document.getElementById('confirmPassword');
  if(password.value === confirmPassword.value){
       password.style.backgroundColor = 'green';
       confirmPassword.style.backgroundColor  = 'green';
   } else {
        password.style.backgroundColor  = 'red';
       confirmPassword.style.backgroundColor  = 'red';
   }
}
