import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPUBwtPbkuyVpHzD3gd4aHPkahVqpFPfw",
  authDomain: "social-media-cb03d.firebaseapp.com",
  databaseURL: "https://social-media-cb03d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "social-media-cb03d",
  storageBucket: "social-media-cb03d.appspot.com",
  messagingSenderId: "20554535740",
  appId: "1:20554535740:web:7479212adfa6d26b6f4439"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);