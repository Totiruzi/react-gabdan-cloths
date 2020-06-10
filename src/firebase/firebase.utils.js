import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCY6voLH6uTE-5pk-q45wqvrsxK_nN5ab4',
  authDomain: 'gab-dan-cloths-db.firebaseapp.com',
  databaseURL: 'https://gab-dan-cloths-db.firebaseio.com',
  projectId: 'gab-dan-cloths-db',
  storageBucket: 'gab-dan-cloths-db.appspot.com',
  messagingSenderId: '764495895252',
  appId: '1:764495895252:web:6b4877fa9b063491fef941',
  measurementId: 'G-5P1G20ST5J',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error created user', error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
