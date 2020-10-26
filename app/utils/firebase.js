import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCevqWvxehj935fPfasOv56RKorSE-_jVk",
  authDomain: "tenedores-288af.firebaseapp.com",
  databaseURL: "https://tenedores-288af.firebaseio.com",
  projectId: "tenedores-288af",
  storageBucket: "tenedores-288af.appspot.com",
  messagingSenderId: "405192468608",
  appId: "1:405192468608:web:913cf3e9f855977557de65",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
