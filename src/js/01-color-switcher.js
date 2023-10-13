const dataStart = document.querySelector('[data-start]');
const dataStop = document.querySelector('[data-stop]');
const bodyLink = document.querySelector('body');

let timerId = null;

dataStart.addEventListener('click', onStart);
dataStop.addEventListener('click', onStop);

function onStart() {
  timerId = setInterval(getBgColor, 1000);

  dataStart.setAttribute('disabled', 'true');
}

function onStop() {
  clearInterval(timerId);

  dataStart.removeAttribute('disabled');
}

function getBgColor() {
  bodyLink.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}