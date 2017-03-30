var passFields = document.getElementsBySelector'input[type="password"]');

for(var i = 0 ; i < passField.length; i++){
  appendShowButton(passFields[i]);
}

function appendShowButton(passField){
  var showButton = document.createElement("button");
  showButton.setAttribute("value","Show Password");
  showButton.setAttribute("id","show_pass_show_button");
  showButton.setAttribute("onmousedown","function(downEvent){downEvent.target.setAttribute("type","text");}");
  showButton.setAttribute("onmouseup","function(upEvent){upEvent.target.setAttribute("type","password");}");
  passField.parentNode.insertBefore(showButton,passField.nextSibling);
}
