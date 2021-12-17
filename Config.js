import firebase from 'firebase';
require ('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDQS2617xXxYut79dKwb3zlHoAf8H6omjk",
  authDomain: "virtual-pet-5524a.firebaseapp.com",
  databaseURL: "https://virtual-pet-5524a.firebaseio.com",
  projectId: "virtual-pet-5524a",
  storageBucket: "virtual-pet-5524a.appspot.com",
  messagingSenderId: "863201209230",
  appId: "1:863201209230:web:8aece7a7ee21ef323892df"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();