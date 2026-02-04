import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzokitueX9Ph_LNUekRpG0MZxpPkgcEiQ",
  authDomain: "hacker-withdraw-photos.firebaseapp.com",
  databaseURL: "https://hacker-withdraw-photos-default-rtdb.firebaseio.com",
  projectId: "hacker-withdraw-photos",
  storageBucket: "hacker-withdraw-photos.appspot.com",
  messagingSenderId: "295892241734",
  appId: "1:295892241734:web:51ffb9b9b86165cd9b2947",
  measurementId: "G-B47NK6LBHQ"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);