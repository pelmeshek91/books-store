import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collectionGroup } from 'firebase/firestore';

const signBtn = document.querySelector('.sign-btn');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
      signBtn.innerText = "Log out";
      
  } else {
   
    signBtn.innerText = "Sign up";
  }
});

signBtn.addEventListener('click', function() {
 
});
