import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyD5EpUtnC9MiWejISwSvbJQWDJrQBGVSDw",
  authDomain: "milestone-project-9174a.firebaseapp.com",
  projectId: "milestone-project-9174a",
  storageBucket: "milestone-project-9174a.appspot.com",
  messagingSenderId: "995830154249",
  appId: "1:995830154249:web:8ab8b311e04f33a50664d8",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

const auth = getAuth(firebase);

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

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const Additem = (initialValues) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date1 = new Date();

  const database = getDatabase();
  const itemRef = ref(database, "baglanti2");
  const newİtem = push(itemRef);
  set(newİtem, {
    title: initialValues.title,
    imgurl: initialValues.imgurl,
    content: initialValues.content,
    date: `${
      months[date1.getMonth()]
    } ${new Date().getDate()} , ${new Date().getFullYear()}`,
  });
};

export const useFetch = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    const database = getDatabase();
    const itemRef = ref(database, "baglanti2");

    onValue(itemRef, (snapshot) => {
      const data = snapshot.val();
      const myArray = [];
      for (let id in data) {
        myArray.push({ id, ...data[id] });
      }

      setItems(myArray);
    });
  }, []);

  return { items };
};
