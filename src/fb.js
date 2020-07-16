import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyBgA1ieAeutBNmdbHZnVh-lzL5T0ZQXnCg",
    authDomain: "todo-app-vue-aa0d0.firebaseapp.com",
    databaseURL: "https://todo-app-vue-aa0d0.firebaseio.com",
    projectId: "todo-app-vue-aa0d0",
    storageBucket: "todo-app-vue-aa0d0.appspot.com",
    messagingSenderId: "103644581440",
    appId: "1:103644581440:web:5486714465667ef48ad9a5",
    measurementId: "G-6RGNW41Z0F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  export default db;