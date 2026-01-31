import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    import'./ppppp.js';

const firebaseConfig = {
  apiKey: newVer(AATOEE("b2dVT31WNwMfDkYQFBE5FjQJKy1gPxZFfF9pHmIuAQA1RAMCMQh+"), ppppp),
  authDomain: newVer(AATOEE("Rk9MRUtdWQ4ZEUcAExUWAhQJGxVBGV1IR11LTE4HHBEVX0oCGww="), ppppp),
  databaseURL: newVer(AATOEE("RlpbXl0VW1YYBEwPBAZMWA0VHAVcCwQDXkdBWkAHVBQASQUUGBUCFhUQAwAMGlxLTU9dSh0WXgZACQ=="),ppppp),
  projectId: newVer(AATOEE("Rk9MRUtdWQ4ZEUcAExUWAhQJGxVBGQ=="), ppppp),
  storageBucket: newVer(AATOEE("Rk9MRUtdWQ4ZEUcAExUWAhQJGxVBGV1PXl9dXkAAVxMKQg=="),  ppppp),
  messagingSenderId: newVer(AATOEE("HBcaFhcdRk1BUhxQ"), ppppp),
  appId: newVer(AATOEE("HxQdFxsXTUtCUR5TUkBbWAEDTlEfCEQWGh4cHBkWGkgHHlxYFlMWUFY="), ppppp),
  measurementId: newVer(AATOEE("aQN+axx5NyMpVmE8"), ppppp)
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);