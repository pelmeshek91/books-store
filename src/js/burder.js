(() => {
  const refs = {
    openModalBtn: document.querySelector('.burger-modal-open'),
    closeModalBtn: document.querySelector('.burger-modal-close'),
    modal: document.querySelector('[burger-data-modal]'),
    body: document.querySelector('body'),
    signBtn: document.querySelector('.sign-btn'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.closeModalBtn.classList.toggle('hiden-burger');
    refs.openModalBtn.classList.toggle('hiden-burger');
    refs.body.classList.toggle('is-open-body');

    if (refs.body.classList.contains('is-open-body')) {
      refs.signBtn.classList.add('is-visible');
    } else {
      refs.signBtn.classList.remove('is-visible');
    }
  }
})();
