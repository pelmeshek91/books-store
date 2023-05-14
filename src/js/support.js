import { charities, createLogos } from './createLogos';

const list = document.querySelector('.support-list');

list.insertAdjacentHTML('beforeend', createLogos(charities));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
const supportContainer = document.querySelector('.support-container');
const supportList = document.querySelector('.support-list');
const supportItems = document.querySelectorAll('.support-item');
const scrollBtn = document.querySelector('.scroll-btn');

scrollBtn.addEventListener('click', onScrollBtnClick);

let isExpanded = false;
let isContainerExpanded = false;

// Показую тільки перші 5 елементів
supportItems.forEach((item, index) => {
  if (index > 4) {
    item.style.display = 'none';
  }
});

supportContainer.style.height = 'fit-content';
scrollBtn.style.transform = 'rotate(0deg)';
supportList.classList.add('show');

function onScrollBtnClick() {
  if (!isExpanded && !isContainerExpanded) {
    supportItems.forEach((item, index) => {
      if (index > 5) {
        item.style.display = 'block'; // Показую всі елементи
      }
    });
    
    // supportList.classList.remove('show');
    scrollBtn.style.transform = 'rotate(180deg)';
  } else {
    supportItems.forEach((item, index) => {
      if (index >= 5) {
        item.style.display = 'none'; // Ховаю всі елементи крім перших 5
      }
    });
    supportContainer.style.height = 'fit-content';
    scrollBtn.style.transform = 'rotate(0deg)';
  }
  isExpanded = !isExpanded;
  isContainerExpanded = !isContainerExpanded;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
