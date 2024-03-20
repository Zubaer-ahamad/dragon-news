// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbgIPfcJbeAVouSnBqt5Okit6V6kHu4RU",
  authDomain: "dragon-news-auth-b694c.firebaseapp.com",
  projectId: "dragon-news-auth-b694c",
  storageBucket: "dragon-news-auth-b694c.appspot.com",
  messagingSenderId: "577126365316",
  appId: "1:577126365316:web:39758ec0ba81ec18d12ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;