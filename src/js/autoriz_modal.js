
(() => {
  const autorizMenu = document.querySelector('.autoriz-menu-container');
  const openMenuBtn = document.querySelector('.autoriz-open-menu');
  const closeMenuBtn = document.querySelectorAll('.autoriz-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    autorizMenu.classList.toggle('autoriz-is-hidden');
  }

  //   const scrollLockMethod = !isMenuOpen
  //     ? 'disableBodyScroll'
  //     : 'enableBodyScroll';
  //   bodyScrollLock[scrollLockMethod](document.body);
  // };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.forEach(closeMenuBtn => closeMenuBtn.addEventListener('click', toggleMenu));  
})();

