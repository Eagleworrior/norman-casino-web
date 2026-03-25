// -------------------------------------------
// NORMAN CASINO AUTH SYSTEM (FULL VERSION)
// Neon, high-graphic, Firebase Authentication
// -------------------------------------------

// Firebase imports (MODULE VERSION)
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
// YOUR FIREBASE CONFIG (Corrected bucket)
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

console.log("%c🔥 Norman Casino Auth Loaded", "color:#ff00ff; font-size:16px;");


// -------------------------------------------
// SIGNUP FUNCTION
// -------------------------------------------
export async function handleSignup(email, password, messageBox) {
  try {
    // Create user in Firebase Auth
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    // Create Firestore profile
    await setDoc(doc(db, "users", user.uid), {
      email: email,
      balance: 1000, // starting balance
      created: new Date().toISOString()
    });

    // Success message
    messageBox.style.display = "block";
    messageBox.className = "success";
    messageBox.textContent = "Account created! Redirecting...";

    // Redirect to main menu
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
    const user = userCred.user;

    messageBox.style.display = "block";
    messageBox.className = "success";
    messageBox.textContent = "Login successful! Loading your balance...";

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
// AUTO SESSION CHECK
// -------------------------------------------
onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log("%c✔ User logged in:", "color:#00ffea;", user.email);
  } else {
    console.log("%c✖ No user logged in", "color:#ff5555;");
  }
});


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

