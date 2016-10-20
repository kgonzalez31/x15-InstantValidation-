function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var pos = userEntered.search(" ");

  //Show message that there is an error with the username...
  if(userEntered.length < 6) {
  document.getElementById("usernameError").innerHTML="Username must have more than 6 character.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}
  else if(pos > -1) {
    document.getElementById("usernameError").innerHTML="Username cannot have spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else{
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if(passEntered == "password"){
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered.length < 6 || passEntered.length > 20){
     document.getElementById("passwordError").innerHTML="Password must have 6 through 20 characters.";
     document.getElementById("passwordError").classList.remove("hidden-message");
     document.getElementById("passwordError").classList.add("shown-message");
     document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered == userEntered){
     document.getElementById("passwordError").innerHTML="Password cannot be the same as Username.";
     document.getElementById("passwordError").classList.remove("hidden-message");
     document.getElementById("passwordError").classList.add("shown-message");
     document.getElementById("passwordGroup").classList.add("has-error");
   }
else{
  document.getElementById("passwordGroup").classList.add("has-success");
}
}
