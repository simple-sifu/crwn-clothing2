import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZt9tyckxLFKDzSYsX1cBFfJS_urGLI00",
  authDomain: "crown-clothing-db-9854d.firebaseapp.com",
  projectId: "crown-clothing-db-9854d",
  storageBucket: "crown-clothing-db-9854d.appspot.com",
  messagingSenderId: "910162844044",
  appId: "1:910162844044:web:a5d4002d166a0e2a8e9ea9",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
