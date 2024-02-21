// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwYZHU0nFygGwaYkAbkYfZ868j71w7ku0",
  authDomain: "usermanagement-605a9.firebaseapp.com",
  projectId: "usermanagement-605a9",
  storageBucket: "usermanagement-605a9.appspot.com",
  messagingSenderId: "89091360073",
  appId: "1:89091360073:web:f95fe5c061cbdd250f4698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);


