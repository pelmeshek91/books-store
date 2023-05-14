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

// ///////////Показую тільки перші сталі видимі елементи
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
  console.log(visibleItemsCount);
  if (!isExpanded && !isContainerExpanded) {
    supportItems.forEach((item, index) => {
      if (index >= visibleItemsCount) {
        item.style.display = 'flex'; ////////////// Показую всі елементи
      }
    });

    scrollBtn.style.transform = 'rotate(180deg)';
  } else {
    supportItems.forEach((item, index) => {
      if (index >= visibleItemsCount) {
        item.style.display = 'none'; ///////////////// Ховаю всі елементи крім перших 4
      }
    });
    supportContainer.style.height = 'fit-content';
    scrollBtn.style.transform = 'rotate(0deg)';
  }
  isExpanded = !isExpanded;
  isContainerExpanded = !isContainerExpanded;
}

function getVisibleItemsCount() {
  const windowWidth = window.screen.width;
  console.log(windowWidth);
  if (windowWidth > 768) {
    return 6;
  } else {
    return 4;
  }
}

// const supportContainer = document.querySelector('.support-container');
// const supportList = document.querySelector('.support-list');
// const supportItems = document.querySelectorAll('.support-item');
// const scrollBtn = document.querySelector('.scroll-btn');

// scrollBtn.addEventListener('click', onScrollBtnClick);

// let isExpanded = false;
// let isContainerExpanded = false;

// // Показую тільки перші 5 елементів
// supportItems.forEach((item, index) => {
//   if (index > 5) {
//     item.style.display = 'none';
//   }
// });

// supportContainer.style.height = 'fit-content';
// scrollBtn.style.transform = 'rotate(0deg)';
// supportList.classList.add('show');

// function onScrollBtnClick() {
//   if (!isExpanded && !isContainerExpanded) {
//     supportItems.forEach((item, index) => {
//       if (index > 5) {
//         item.style.display = 'block'; // Показую всі елементи
//       }
//     });
//     // supportList.classList.remove('show');
//     scrollBtn.style.transform = 'rotate(180deg)';
//   } else {
//     supportItems.forEach((item, index) => {
//       if (index >= 5) {
//         item.style.display = 'none'; // Ховаю всі елементи крім перших 5
//       }
//     });
//     supportContainer.style.height = 'fit-content';
//     scrollBtn.style.transform = 'rotate(0deg)';
//   }
//   isExpanded = !isExpanded;
//   isContainerExpanded = !isContainerExpanded;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
