import firebase from 'firebase';
import { firebaseConfig } from './firebase-config';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
