import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './firebase-config';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
