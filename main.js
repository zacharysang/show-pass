var passFields = document.querySelectorAll('input[type="password"]');

passFields.forEach(addListeners);

//make password visible on hover
function addListeners(element){
  element.addEventListener('mouseover',function(ev){
    ev.target.setAttribute('type','text');
  });
  
  //change it back on hover out
  element.addEventListener('mouseout',function(ev){
    ev.target.setAttribute('type','password')
  });
}

