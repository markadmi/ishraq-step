import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-check.js";


const firebaseConfig = {
  apiKey: "AIzaSyCzokitueX9Ph_LNUekRpG0MZxpPkgcEiQ",
  authDomain: "hacker-withdraw-photos.firebaseapp.com",
  databaseURL: "https://hacker-withdraw-photos-default-rtdb.firebaseio.com",
  projectId: "hacker-withdraw-photos",
  storageBucket: "hacker-withdraw-photos.appspot.com",
  messagingSenderId: "295892241734",
  appId: "1:295892241734:web:01b7841226bc8b189b2947",
  measurementId: "G-QE2VCZY3NX"
};


const app = initializeApp(firebaseConfig);


const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LfnzuwrAAAAACmSjFTf1Nb8D9qSNqCoFuNIPPic'),
  isTokenAutoRefreshEnabled: true 
});


export const db = getDatabase(app);
export const storage = getStorage(app);
