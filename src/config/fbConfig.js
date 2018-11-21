import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyD_cYJUrHwFg5R4OMhop7gUfa60f_IlUR4",
    authDomain: "time-emsi.firebaseapp.com",
    databaseURL: "https://time-emsi.firebaseio.com",
    projectId: "time-emsi",
    storageBucket: "time-emsi.appspot.com",
    messagingSenderId: "447427985403"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
  
export default firebase 