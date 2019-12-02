var form = document.querySelector("form")
xhr = new XMLHttpRequest(),
url = "https://script.google.com/macros/s/AKfycbwCaNCgrrICWfvByYFyfLzI_L8tJimaPmzawLpxAUT2ZiSTCjM/exec"

xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "application/json");

  var url = form.action, xhr = new XMLHttpRequest();
  var params = [].filter.call(form.elements, function (el) {
          return (el.type != 'checkbox' && el.type != 'radio') || el.checked;
        }).filter(function(el) { return !!el.name; }) //Nameless elements die.
        .filter(function(el) { return !el.disabled; }) //Disabled elements die.
        .map(function(el) {
          return encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value);
        }).join('&');	

  xhr.onreadystatechange = function() {//Call a function when the state changes.
    if(xhr.readyState === 4 && xhr.status === 200) { //submission in order 

    }
  }
  xhr.send();