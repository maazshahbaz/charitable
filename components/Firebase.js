import firebase from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/firestore";
const firebaseConfig = {
apiKey: "AIzaSyAzV4cASujOdwwMCGUSvWB46k71RITmvQg",
  authDomain: "charitable-ab7f1.firebaseapp.com",
  projectId: "charitable-ab7f1",
  storageBucket: "charitable-ab7f1.appspot.com",
  messagingSenderId: "938198257829",
  appId: "1:938198257829:web:f710144c5a111b87567d4c",
 
 
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore();

export { auth ,  firebase , db };