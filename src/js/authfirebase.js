import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  openBtn,
  backdrop,
  modal,
  form,
  emailInput,
  passwordInput,
  inputNameValue,
  singUpBtn,
  closeModal,
} from './autoriz_modal';
import Notiflix from 'notiflix';
import { home, shopping } from './categories';

const firebaseConfig = {
  apiKey: 'AIzaSyDdiX4miDnvSyE7S-piSDUDrOT024HmPxc',
  authDomain: 'partybookshard.firebaseapp.com',
  databaseURL:
    'https://partybookshard-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'partybookshard',
  storageBucket: 'partybookshard.appspot.com',
  messagingSenderId: '572831827905',
  appId: '1:572831827905:web:09a3282865bb9169df1140',
};
export function openModal() {
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
  shopping.classList.add('is-hidden');
  home.classList.add('is-hidden');
}
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    localStorage.setItem('currentUser', user.uid);
    shopping.classList.remove('is-hidden');
    home.classList.remove('is-hidden');
  } else {
    localStorage.removeItem('currentUser');
  }
});

export function onAuth(e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const name = inputNameValue.value;

  const textBtn = singUpBtn.textContent.toUpperCase();
  if (textBtn === 'SIGN UP') {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(`User with email ${user.email} registered !`);
        openBtn.textContent = name;
        localStorage.setItem('userName', name);
        closeModal();

        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            localStorage.setItem('currentUser', user.uid);
          } else {
            localStorage.removeItem('currentUser');
          }
        });
        const emptyArray = [];
        setDB(emptyArray);
        form.reset();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;

        Notiflix.Notify.failure('This user already registered');
      });
  }
  if (textBtn === 'SIGN IN') {
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
          Notiflix.Notify.warning('Wrong password! Write correct password');
        } else {
          Notiflix.Notify.failure('User not found! Please sign up!');
        }
      });
  }
  form.reset();
}

const db = firebase.firestore();
const booksColection = ['643282b1e85766588626a0d2', '643282b1e85766588626a0b2'];

export async function setDB(array) {
  const userID = localStorage.getItem('currentUser');
  await setDoc(doc(db, 'users', userID), {
    booksArray: array,
  });
}
export async function getDB() {
  const userID = localStorage.getItem('currentUser');
  const docRef = doc(db, 'users', userID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().booksArray;
  } else {
    console.log('No such document!');
  }
}
