(() => {
  const refs = {
    openModalBtn: document.querySelector('.burger-modal-open'),
    closeModalBtn: document.querySelector('.burger-modal-close'),
      modal: document.querySelector('[burger-data-modal]'),
    body: document.querySelector('body')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
     

  function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    refs.closeModalBtn.classList.toggle('hiden-burger');
      refs.openModalBtn.classList.toggle('hiden-burger');
      refs.body.classList.toggle('is-open-body');
  }
})();