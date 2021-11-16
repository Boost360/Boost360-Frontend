// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

export  {
  storage, app
}
