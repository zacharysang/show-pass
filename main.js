var passFields = document.getElementsBySelector'input[type="password"]');

for(var i = 0 ; i < passField.length; i++){
  appendShowButton(passFields[i]);
}

function appendShowButton(passField){
  var showButton = document.createElement("button");
  showButton.setAttribute("value","Show Password");
  showButton.setAttribute("id","show_pass_show_button");
  passField.parentNode.insertBefore(showButton,passField.nextSibling);
}
