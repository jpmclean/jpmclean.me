const app = document.getElementById('container');

var request = new XMLHttpRequest();
request.open('GET', 'https://www.iubenda.com/api/privacy-policy/90639725', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400 && data.success == true) {
    app.innerHTML = data.content
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Unable to load privacy policy`;
    app.appendChild(errorMessage);
  }
}

request.send();
