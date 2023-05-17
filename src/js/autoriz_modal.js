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

import { openModal, onAuth } from './authfirebase';

export const backdrop = document.querySelector('.backdrop-autoriz');
export const modal = document.querySelector('.autoriz-modal');
const closeBtn = document.querySelector('[autoriz-close-menu]');
export const openBtn = document.querySelector('[autoriz-open-menu]');
const openBtnBurger = document.querySelector('.autoriz-open-menu');
// ===================================================
export const form = document.querySelector('.autoriz-modal-form');
export const singUpBtn = document.querySelector('.autoriz-sing-up-btn');
const autorizBtn = document.querySelector('.autoriz-sub-btn');
const autorizText = document.querySelector('.autoriz-text');
export const inputNameValue = document.querySelector('.autoriz-modal-input');
const btnUp = document.querySelector('#up');
const btnIn = document.querySelector('#in');
export const emailInput = document.getElementById('user_email');
export const passwordInput = document.getElementById('user_password');

checkLogin();
btnUp.addEventListener('click', () => {
  singUpBtn.textContent = 'sign up';
});

btnIn.addEventListener('click', () => {
  singUpBtn.textContent = 'sign in';
});

export function closeModal() {
  backdrop.setAttribute('autoriz-is-hidden', true);
  modal.classList.remove('autoriz-is-active');
}

openBtn.addEventListener('click', openModal);
openBtnBurger.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function checkLogin() {
  const valueLS = localStorage.getItem('userName');
  if (!valueLS) return;
  openBtn.textContent = valueLS;
}
checkLogin();

form.addEventListener('submit', onAuth);

// const db = firebase.firestore();
// const booksColection = ['643282b1e85766588626a0d2', '643282b1e85766588626a0b2'];

// export async function setDB(array) {
//   const userID = localStorage.getItem('currentUser');
//   await setDoc(doc(db, 'users', userID), {
//     booksArray: array,
//   });
// }
// const emptyArray = [];
// setDB(emptyArray);

// export async function getDB() {
//   const userID = localStorage.getItem('currentUser');
//   const docRef = doc(db, 'users', userID);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     return docSnap.data().booksArray;
//   } else {
//     console.log('No such document!');
//   }
// }

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
