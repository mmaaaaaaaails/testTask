
import './assets/css/main.css';
import './assets/scss/main.scss';
import './js/common';

const team = document.querySelector('.team_block');
const personDescription = document.querySelector('div.person_description');

function gg() {
  team.querySelectorAll('.person').forEach((el) => {
    el.addEventListener('mouseover', () => {
      personDescription.style.display = 'flex';
    });
  });
}
gg();

function ggf() {
  team.querySelectorAll('.person').forEach((el) => {
    el.addEventListener('mouseout', () => {
      personDescription.style.display = 'none';
    });
  });
}
ggf();

// person.addEventListener('mouseover', () => {
//   personDescription.style.display = 'flex';
// });

// person.addEventListener('mouseout', () => {
//   personDescription.style.display = 'none';
// });
