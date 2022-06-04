import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ9jMUV-gR5ee33qcsKY9f-5TyKJYBIRI",
  authDomain: "ledgerscore-c8ecf.firebaseapp.com",
  projectId: "ledgerscore-c8ecf",
  storageBucket: "ledgerscore-c8ecf.appspot.com",
  messagingSenderId: "922749353844",
  appId: "1:922749353844:web:bc4f6af31b4ce944333621",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
