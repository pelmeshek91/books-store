import { sectionBooksEl } from './allBooks';

export function createLoader() {
  sectionBooksEl.innerHTML = `<div id="maskLoader" class="mask">
  <div class="loader bookLoader">
    <figure class="page"></figure>
    <figure class="page"></figure>
    <figure class="page"></figure>
  </div>
</div>
`;
}

export function removeMask() {
  mask = document.querySelector('.mask');
  this.mask.classList.add('hide');
}
