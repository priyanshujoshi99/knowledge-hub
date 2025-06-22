const body = document.querySelector('body');
const colorButtons = document.querySelectorAll('.button');

colorButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    body.style.backgroundColor = event.target?.id ?? 'white';
  });
});
