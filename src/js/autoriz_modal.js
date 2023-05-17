import { doc, setDoc, getDoc } from 'firebase/firestore';

import { documentId } from '@firebase/firestore';
// import { collection, getDocs } from '@firebase/firestore';
import { doc } from '@firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Notiflix from 'notiflix';
import { async } from '@firebase/util';
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

// const firebaseConfig = {
//   apiKey: 'AIzaSyBZUMGYawpmN1Lo56e3CW4F7L7ReqQqvjM',
//   authDomain: 'book-shop1-f317c.firebaseapp.com',
//   projectId: 'book-shop1-f317c',
//   storageBucket: 'book-shop1-f317c.appspot.com',
//   messagingSenderId: '732619883198',
//   appId: '1:732619883198:web:aa953a342cb3e5ccc054ef',
// };
const firebaseConfig = {
  apiKey: 'AIzaSyCKPIp5P57wGoGdcbR6QZHRmEbcDocx1gA',
  authDomain: 'book-shop-dd444.firebaseapp.com',
  projectId: 'book-shop-dd444',
  storageBucket: 'book-shop-dd444.appspot.com',
  messagingSenderId: '721371865689',
  appId: '1:721371865689:web:842c8a5efa6226f21a0748',
};

firebase.initializeApp(firebaseConfig);
/**
 * при перезевантаженні перевірка логінізації
 */
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    localStorage.setItem('currentUser', user.uid);
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
});

const db = firebase.firestore();
const booksColection = ['643282b1e85766588626a0d2', '643282b1e85766588626a0b2'];

export async function setDB(array) {
  const userID = localStorage.getItem('currentUser');
  await setDoc(doc(db, 'users', userID), {
    booksArray: array,
  });
}
// const emptyArray = [];
// setDB(emptyArray);

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

/**
 * отримання даних з фаєербейс , метод гет, create
 * 
 * const db = firebase.firestore();
const currentUser = localStorage.getItem('currentUser');
// console.log(currentUser);
const userRef = db.collection('users').doc(currentUser.uid);
// console.log(userRef);

const booksColection = [
  '643282b1e85766588626a0ba',
  '643282b1e85766588626a0d2',
  '643282b1e85766588626a0b2',
];

function getRecordsFromFirestore() {
  userRef
    .collection('records')
    .get()
    .then(querySnapshot => {
      const records = [];
      querySnapshot.forEach(doc => {
        const record = doc.data();
        records.push(record);
      });
      // localStorage.setItem('userRecords', JSON.stringify(records));
      console.log('Records saved to localStorage:', records);
    })
    .catch(error => {
      console.error('Error getting records from Firestore: ', error);
    });
}
getRecordsFromFirestore();

function createRecord(title) {
  const newRecord = {
    title: title,
  };

  userRef
    .collection('records')
    .add(newRecord)
    .then(docRef => {
      // console.log('Record created with ID: ', docRef.id);
    })
    .catch(error => {
      console.error('Error creating record: ', error);
    });
}
// createRecord(booksColection);

// async function getRecords() {
//   const querySnapshot = await getDocs(collection(db, 'users'));
//   querySnapshot.forEach(doc => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, ' => ', doc.data());
//   });
//   // userRef
//   //   .collection('records')
//   //   .get()
//   //   .then(querySnapshot => {
//   //     console.log(querySnapshot.query);
//   //     // querySnapshot.forEach(doc => {
//   //     //   const record = doc.data();

//   //     //   const jsonchik = JSON.parse(record.title);
//   //     //   console.log(jsonchik);
//   //     //   // return jsonchik;
//   //     // });
//   //   })
//   //   .catch(error => {
//   //     console.error('Error getting records: ', error);
//   //   });
// }

// getRecords();
 * 
 * 
 * 
 */
