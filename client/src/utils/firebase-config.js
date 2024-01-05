import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6EDZNWLHhxi_OnHkvFMtLvsnFHid2nD4",
  authDomain: "netflix-self.firebaseapp.com",
  projectId: "netflix-self",
  storageBucket: "netflix-self.appspot.com",
  messagingSenderId: "861333550830",
  appId: "1:861333550830:web:76035288cc4faadf38a5ff",
  measurementId: "G-8XSR0YTT7T",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
