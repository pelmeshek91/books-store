const scrollBtn = document.querySelector('.scroll-up-btn');

scrollBtn.addEventListener('click', onScrollBtn);

// function onScrollBtn() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }

function onScrollBtn() {
  if (window.pageYOffset > 600) {
    scrollBtn.style.opacity = '1';
  } else {
    scrollBtn.style.opacity = '0';
  }
}

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.onscroll = onScrollBtn;
