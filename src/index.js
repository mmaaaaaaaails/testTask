
import './assets/css/main.css';
import './assets/scss/main.scss';
import './js/common';

const modal = document.createElement('div');
modal.classList = 'modal hide';
document.body.append(modal);

const modalClose = document.createElement('span');
modalClose.className = 'modal_close';
modalClose.innerHTML = '&times;';
modal.append(modalClose);

const modalContent = document.createElement('img');
modalContent.className = 'modal_content';
modal.append(modalContent);

const MODAL = document.querySelectorAll('.modal');
const WORK_PICTURE = document.querySelectorAll('.work_picture');
const MODAL_CONTENT = document.querySelector('.modal_content');

function openModal() {
  WORK_PICTURE.forEach((el) => {
    el.addEventListener('click', (e) => {
      MODAL.forEach((element) => {
        element.classList.remove('hide');
        MODAL_CONTENT.setAttribute('src', e.target.src);
      });
    });
  });
}


const MODAL_CLOSE = document.querySelector('.modal_close');

function closeModalCross() {
  MODAL_CLOSE.addEventListener('click', () => {
    MODAL.forEach((element) => {
      element.classList.add('hide');
    });
  });
}


function closeModal() {
  document.addEventListener('click', (event) => {
    if (event.target.closest('.modal')) {
      MODAL.forEach((element) => {
        element.classList.add('hide');
      });
    }
  });
}

openModal();
closeModalCross();
closeModal();
