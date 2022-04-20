
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5EpUtnC9MiWejISwSvbJQWDJrQBGVSDw",
  authDomain: "milestone-project-9174a.firebaseapp.com",
  projectId: "milestone-project-9174a",
  storageBucket: "milestone-project-9174a.appspot.com",
  messagingSenderId: "995830154249",
  appId: "1:995830154249:web:8ab8b311e04f33a50664d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    console.log(userCredential);
  } catch (error) {
    alert(error.message);
  }
};

export const loginUser = async (email, password, navigate) => {
  try {
    let user = await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    console.log(user);
  } catch (error) {
    alert(error.message);
  }
};

export const logOut = () => {
  signOut(auth);
  alert("User log out");
};



export const userObserver =  (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser)
      
      
    } else {
      setCurrentUser(false)
    }
  });
}
