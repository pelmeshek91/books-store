import { charities, createLogos } from './createLogos';

const list = document.querySelector('.support-list');
list.insertAdjacentHTML('beforeend', createLogos(charities));

const logos = document.querySelectorAll('.support-link');

logos.forEach((logo, index) => {
  logo.addEventListener('click', e => {
    e.preventDefault();
    window.open(charities[index].url, '_blank');
  });
});
