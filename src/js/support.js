import { charities, createLogos } from './createLogos';

const list = document.querySelector('.support-list');

list.insertAdjacentHTML('beforeend', createLogos(charities));
