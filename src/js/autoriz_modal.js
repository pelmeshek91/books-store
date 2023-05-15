


const backdrop = document.querySelector('.backdrop-autoriz');
const modal = document.querySelector('.autoriz-modal');
const closeBtn = document.querySelector('[autoriz-close-menu]');
const openBtn = document.querySelector('[autoriz-open-menu]');
// ===================================================
const form = document.querySelector('.autoriz-modal-form');
const singUpBtn = document.querySelector('.autoriz-sing-up-btn');
const autorizBtn = document.querySelector('.autoriz-sub-btn');
const autorizText = document.querySelector('.autoriz-text');

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




async function checkAuth() {
  const user = await getUser();
  if (user) {
    autorizText.innerHTML = `<button class="autoriz-sub-btn" type="submit">sign in</button>`;
    autorizBtn.classList.add('hidden');
    singUpBtn.innerHTML = 'sign in';
    
  } else {
    autorizText.innerHTML = `
      <button class="autoriz-sub-btn" type="submit">sign up</button>
      <button class="autoriz-sub-btn" type="submit">sign in</button>`;
    singUpBtn.classList.remove('hidden');
    autorizBtn.innerHTML = 'sign up';
  
  }
}

async function getUser() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

async function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = form.querySelector('.autoriz-modal-input').value;
  const email = form.querySelector('.autoriz-email').value;
  const password = form.querySelector('.autoriz-modal-input[name="autoriz_password"]').value;
  const user = { name, email, password };
  await setUser(user);
  checkAuth();
  form.reset();
});

checkAuth();

