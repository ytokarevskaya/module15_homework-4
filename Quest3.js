// Задание 3 JS

const wsUri = "wss://echo.websocket.org/";

const output = document.querySelector('.res');

const btnSend = document.querySelector('.send-message');
const btnGeo = document.querySelector('.geo-location');
let websocket = new WebSocket(wsUri);

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

  websocket.onmessage = function(evt) {
    writeToScreen(
      '<div class="messageServer">' + evt.data+'</div>'
    );
  };



btnSend.addEventListener('click', () => {
  
  let message = document.querySelector('input').value;
  writeToScreen('<div class="messageSender">' + message +'</div>');
  websocket.send(message);
});

const error = () => {
  let message = 'Невозможно получить ваше местоположение';
  writeToScreen('<div class="messageServer">' + message +'</div>');
}

const success = (position) => {
  console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  
  let message = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  writeToScreen('<div class="messageSender"><a href="' + message + '">Гео-локация</a></div>');
}

btnGeo.addEventListener('click', () => { 
  if (!navigator.geolocation) {
    let message = 'Geolocation не поддерживается вашим браузером';
    writeToScreen('<div class="messageServer">' + message +'</div>');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
