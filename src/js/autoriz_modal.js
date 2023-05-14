


const backdrop = document.querySelector('.backdrop-autoriz');
const modal = document.querySelector('.autoriz-modal');
const closeBtn = document.querySelector('[autoriz-close-menu]');
const openBtn = document.querySelector('[autoriz-open-menu]');


function openModal() {
  backdrop.removeAttribute('autoriz-is-hidden');
  modal.classList.add('autoriz-is-active');
}


function closeModal() {
  backdrop.setAttribute('autoriz-is-hidden', true);
  modal.classList.remove('autoriz-is-active');
}


openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
