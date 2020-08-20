// Задание 2 JS

const btn = document.querySelector('.j-btn-test');

let width = window.screen.width;
let height = window.screen.height;
let message = `Размер вашего экрана ${width}x${height}px`;
btn.addEventListener('click', () => {
  alert(message)
});
