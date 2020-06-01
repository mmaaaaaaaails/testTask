
import './assets/css/main.css';
import './assets/scss/main.scss';
import './js/common';

const modal = document.querySelector('.modal');
const workPicture = document.querySelectorAll('.work_picture');
const modalContent = document.querySelector('.modal_content');

workPicture.forEach((el) => {
  el.addEventListener('click', (e) => {
    modal.style.display = 'block';
    modalContent.setAttribute('src', e.target.src);
  });
});


const close = document.querySelector('.modal_close');
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('click', (event) => {
  if (event.target.closest('.modal')) {
    modal.style.display = 'none';
  }
});
