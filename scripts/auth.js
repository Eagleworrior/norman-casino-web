// -------------------------------------------
// NORMAN CASINO AUTH SYSTEM (FINAL VERSION)
// -------------------------------------------

// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// -------------------------------------------
// FIREBASE CONFIG (Corrected)
// -------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyDsK3umDd8f2ujLAjIZkv10mtvFNkCs2fA",
  authDomain: "norman-casino.firebaseapp.com",
  projectId: "norman-casino",
  storageBucket: "norman-casino.appspot.com",
  messagingSenderId: "727231313437",
  appId: "1:727231313437:web:f0e60b94cf8f97cb30f8f4"
};


// -------------------------------------------
// INITIALIZE FIREBASE
// -------------------------------------------
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// -------------------------------------------
// SIGNUP FUNCTION
// -------------------------------------------
export async function handleSignup(email, password, messageBox) {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    await setDoc(doc(db, "users", user.uid), {
      email: email,
      balance: 1000,
      created: new Date().toISOString()
    });

    messageBox.style.display = "block";
    messageBox.className = "success";
    messageBox.textContent = "Account created! Redirecting...";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1200);

  } catch (error) {
    messageBox.style.display = "block";
    messageBox.className = "error";
    messageBox.textContent = error.message;
  }
}


// -------------------------------------------
// LOGIN FUNCTION
// -------------------------------------------
export async function handleLogin(email, password, messageBox) {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);

    messageBox.style.display = "block";
    messageBox.className = "success";
    messageBox.textContent = "Login successful! Redirecting...";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1200);

  } catch (error) {
    messageBox.style.display = "block";
    messageBox.className = "error";
    messageBox.textContent = error.message;
  }
}


// -------------------------------------------
// LOGOUT FUNCTION
// -------------------------------------------
export function logoutUser() {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}


// -------------------------------------------
// MAKE FUNCTIONS AVAILABLE TO HTML
// -------------------------------------------
window.handleSignup = handleSignup;
window.handleLogin = handleLogin;
window.logoutUser = logoutUser;

