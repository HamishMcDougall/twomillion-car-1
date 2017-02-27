import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD81JR3h4jZnDWRM3OjETdA9D8m5ATTdoU",
    authDomain: "car2mil-d0aae.firebaseapp.com",
    databaseURL: "https://car2mil-d0aae.firebaseio.com",
    storageBucket: "car2mil-d0aae.appspot.com",
    messagingSenderId: "680989953146"
  };


export const firebaseApp = firebase.initializeApp(config)
