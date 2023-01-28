// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP_7kb8XPNr_fsc6RJEzJCYn9VpSWa4AA",
  authDomain: "crwn-clothing-3c595.firebaseapp.com",
  projectId: "crwn-clothing-3c595",
  storageBucket: "crwn-clothing-3c595.appspot.com",
  messagingSenderId: "29635659989",
  appId: "1:29635659989:web:f27f66dfc5a4375a1dfa5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const dataBase = getFirestore();
export const auth = getAuth();
export const signIN = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, provider);
};

// adding collections to firestore dataBase

export const addCollection = async (collectionKey, objects) => {
  const collectionRef = collection(dataBase, collectionKey);
  const batch = writeBatch(dataBase);
  objects.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

// Getting data from firebase

export const getCollection = async () => {
  const collectionRef = collection(dataBase, "catagories");
  const q = query(collectionRef);
  const querySnapShoot = await getDocs(q);
  const categoryMap = querySnapShoot.docs.reduce((acc, docSnapShoot) => {
    const { title, items } = docSnapShoot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

// Creating user document and if it doesn't exist create new one

export const createUserDocument = async (user, additionalInfo = {}) => {
  if (!user) return;
  const userDocRef = doc(dataBase, "users", user.uid);
  const userSnapShoot = await getDoc(userDocRef);
  if (!userSnapShoot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userDocRef;
};

export const addUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => {
  if (window.confirm("You sure?") === true) {
    await signOut(auth);
  } else {
    return;
  }
};
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
