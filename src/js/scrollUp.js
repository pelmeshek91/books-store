const scrollBtn = document.querySelector('.scroll-up-btn');

scrollBtn.addEventListener('click', onScrollBtn);

function onScrollBtn() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  //   const windowWidth = window.screen.width;
  //   if (windowWidth < 768) {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   } else {
  //     return;
  //   }
}
