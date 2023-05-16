import { documentId } from '@firebase/firestore';
import { doc } from '@firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Notiflix from 'notiflix';
// import { initializeApp } from 'firebase/app'; // for initial
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";

const backdrop = document.querySelector('.backdrop-autoriz');
const modal = document.querySelector('.autoriz-modal');
const closeBtn = document.querySelector('[autoriz-close-menu]');
const openBtn = document.querySelector('[autoriz-open-menu]');
const openBtnBurger = document.querySelector('.autoriz-open-menu');
// ===================================================
const form = document.querySelector('.autoriz-modal-form');
const singUpBtn = document.querySelector('.autoriz-sing-up-btn');
const autorizBtn = document.querySelector('.autoriz-sub-btn');
const autorizText = document.querySelector('.autoriz-text');
const inputNameValue = document.querySelector('.autoriz-modal-input');
const btnUp = document.querySelector('#up');
const btnIn = document.querySelector('#in');

checkLogin();
btnUp.addEventListener('click', () => {
  singUpBtn.textContent = 'sign up';
});

btnIn.addEventListener('click', () => {
  singUpBtn.textContent = 'sign in';
});

function openModal() {
  if (openBtn.textContent.toUpperCase().trim() === 'SIGN UP') {
    backdrop.removeAttribute('autoriz-is-hidden');
    modal.classList.add('autoriz-is-active');
    return;
  }
  firebase
    .auth()
    .signOut()
    .then(() => {})
    .catch(error => {
      console.error(error);
    });
  localStorage.removeItem('userName');
  openBtn.textContent = 'Sign up';
}

function closeModal() {
  backdrop.setAttribute('autoriz-is-hidden', true);
  modal.classList.remove('autoriz-is-active');
}

openBtn.addEventListener('click', openModal);
openBtnBurger.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// async function checkAuth() {
//   const user = await getUser();
//   if (user) {
//     autorizText.innerHTML = `<button class="autoriz-sub-btn" type="submit">sign in</button>`;
//     autorizBtn.classList.add('hidden');
//     singUpBtn.innerHTML = 'sign in';
//   } else {
//     autorizText.innerHTML = `
//       <button class="autoriz-sub-btn" type="submit">sign up</button>
//       <button class="autoriz-sub-btn" type="submit">sign in</button>`;
//     singUpBtn.classList.remove('hidden');
//     autorizBtn.innerHTML = 'sign up';
//   }
// }

// async function getUser() {
//   const user = localStorage.getItem('user');
//   return user ? JSON.parse(user) : null;
// }

// async function setUser(user) {
//   localStorage.setItem('user', JSON.stringify(user));
// }

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const name = form.querySelector('.autoriz-modal-input').value;
//   const email = form.querySelector('.autoriz-email').value;
//   const password = form.querySelector('.autoriz-modal-input[name="autoriz_password"]').value;
//   const user = { name, email, password };
//   await setUser(user);
//   checkAuth();
//   form.reset();
// });

// checkAuth();

// ================================================================

const firebaseConfig = {
  apiKey: 'AIzaSyBZUMGYawpmN1Lo56e3CW4F7L7ReqQqvjM',
  authDomain: 'book-shop1-f317c.firebaseapp.com',
  projectId: 'book-shop1-f317c',
  storageBucket: 'book-shop1-f317c.appspot.com',
  messagingSenderId: '732619883198',
  appId: '1:732619883198:web:aa953a342cb3e5ccc054ef',
};

firebase.initializeApp(firebaseConfig);
/**
 * при перезевантаженні перевірка логінізації
 */
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('currentUser');
  }
});
function checkLogin() {
  const valueLS = localStorage.getItem('userName');
  if (!valueLS) return;
  openBtn.textContent = valueLS;
}
checkLogin();
const emailInput = document.getElementById('user_email');
const passwordInput = document.getElementById('user_password');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const name = inputNameValue.value;

  //   console.log(email);
  // console.log(password);
  // console.log(name);

  const textBtn = singUpBtn.textContent.toUpperCase();
  console.log(textBtn);
  if (textBtn === 'SIGN UP') {
    console.log('sign up');
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(`User with email ${user.email} registered !`);
        openBtn.textContent = name;
        localStorage.setItem('userName', name);
        closeModal();

        form.reset();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log('auth/email-already-in-use');
        Notiflix.Notify.failure('This user already registered');
        // console.error(`Registration failed: ${errorMessage} (${errorCode})`);
      });
  }
  if (textBtn === 'SIGN IN') {
    console.log('sign in');
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(`User with email ${user.email} registered !`);
        openBtn.textContent = name;
        localStorage.setItem('userName', name);

        closeModal();
        form.reset();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode === 'auth/wrong-password') {
          Notiflix.Report.warning(
            'Wrong password',
            'Write correct password',
            'Ok'
          );
        } else {
          Notiflix.Report.failure(
            'User not found!',
            'Please sign up!',
            'Sign up'
          );
        }
      });
  }
  form.reset();
  // const auth = firebase.auth();

  // function signIn(email, password) {
  //   return auth.signInWithEmailAndPassword(email, password);
  // }
  // firebase.auth()
  // .createUserWithEmailAndPassword(email, password)
  // .then((userCredential) => {

  //   const user = userCredential.user;
  //   console.log(`User with email ${user.email} registered !`);
  // })
  // .catch((error) => {

  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.error(`Registration failed: ${errorMessage} (${errorCode})`);
  // });
});
