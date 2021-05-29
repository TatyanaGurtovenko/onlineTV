console.log('sdag')

let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');


burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.classList.toggle('hidden');
})