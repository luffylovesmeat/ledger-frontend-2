import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2qDAGvDeBUkZyVkJr28e98r0UXXteW6I",
  authDomain: "ledger-94c67.firebaseapp.com",
  projectId: "ledger-94c67",
  storageBucket: "ledger-94c67.appspot.com",
  messagingSenderId: "342030470753",
  appId: "1:342030470753:web:4a939f47d4eff715f46420",
  measurementId: "G-41E8E8R1ZC"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
