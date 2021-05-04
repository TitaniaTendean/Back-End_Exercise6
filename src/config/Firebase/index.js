import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDrPxKMVVXEDuI0UsrasDTcBcAgR1N2AE",
    authDomain: "exercisebackend-76aee.firebaseapp.com",
    databaseURL: "https://exercisebackend-76aee-default-rtdb.firebaseio.com",
    projectId: "exercisebackend-76aee",
    storageBucket: "exercisebackend-76aee.appspot.com",
    messagingSenderId: "743199355542",
    appId: "1:743199355542:web:740062b819fc87d72688b7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;