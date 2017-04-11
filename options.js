document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('#save').addEventListener('click', saveOptions);

function saveOptions(e) {
  e.preventDefault();

  if(document.querySelector('#isReqKeyPressed') == 'checked'){
    var statusEl = document.querySelector('#status');

    chrome.storage.sync.set({
        pressKeys:document.querySelector('#pressKeys').value
      },function(){
         displaySucc(statusEl);
    });
  }
  
}

function restoreOptions() {
    var statusEl = document.querySelector('#status');
 
    chrome.storage.sync.get('pressKeys',function(res){
        if(!runtime.lastErr){
          document.querySelector('#pressKeys').value = res.pressKeys;
          displaySucc(statusEl);
        } else {
          displayFail(statusEl);
        }
    });

}

function displaySucc(el){
   el.style.backgroundColor = '#81D274';
   el.style.display = 'true';
   el.innerText = "Saved";   
}

function displayFail(el){
  el.style.backgroundColor = '#D75353';
  el.style.display = 'true';
  el.innerText = 'Saving failed';
}
