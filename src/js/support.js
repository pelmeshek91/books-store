import { charities, createLogos } from './createLogos';

const list = document.querySelector('.support-list');

list.insertAdjacentHTML('beforeend', createLogos(charities));

const supportContainer = document.querySelector('.support-container');
const supportList = document.querySelector('.support-list');
const supportItems = document.querySelectorAll('.support-item');
const scrollBtn = document.querySelector('.scroll-btn');

scrollBtn.addEventListener('click', onScrollBtnClick);

let isExpanded = false;
let isContainerExpanded = false;
let visibleItemsCount = getVisibleItemsCount();

supportItems.forEach((item, index) => {
  if (index >= visibleItemsCount) {
    item.style.display = 'none';
  }
});

supportContainer.style.height = 'fit-content';
scrollBtn.style.transform = 'rotate(0deg)';
supportList.classList.add('show');

function onScrollBtnClick() {
  visibleItemsCount = getVisibleItemsCount();

  if (!isExpanded && !isContainerExpanded) {
    supportItems.forEach((item, index) => {
      if (index >= visibleItemsCount) {
        item.style.display = 'flex';
      }
    });
    scrollBtn.style.transform = 'rotate(180deg)';
    supportContainer.style.transition =
      'all 500ms cubic-bezier(0.4, 0, 0.2, 1)';
  } else {
    supportItems.forEach((item, index) => {
      if (index >= visibleItemsCount) {
        item.style.display = 'none';
      }
    });
    supportContainer.style.height = 'fit-content';
    scrollBtn.style.transform = 'rotate(0deg)';
    supportContainer.style.transition =
      'all 500ms cubic-bezier(0.4, 0, 0.2, 1)';
  }
  isExpanded = !isExpanded;
  isContainerExpanded = !isContainerExpanded;
}

function getVisibleItemsCount() {
  const windowWidth = window.screen.width;
  if (windowWidth > 768) {
    return 6;
  } else {
    return 4;
  }
}

window.addEventListener('resize', onWindowResize);

function onWindowResize() {
  visibleItemsCount = getVisibleItemsCount();
  supportItems.forEach((item, index) => {
    if (index >= visibleItemsCount) {
      item.style.display = 'none';
    } else {
      item.style.display = 'flex';
    }
  });
}
