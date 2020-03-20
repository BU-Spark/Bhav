import firebase from "firebase/app";
const firebaseui = require("firebaseui");
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyBbyfn_YUslEzZBFQFWEErReC6eqBNOe50",
  authDomain: "spark-resiliency.firebaseapp.com",
  databaseURL: "https://spark-resiliency.firebaseio.com",
  projectId: "spark-resiliency",
  storageBucket: "spark-resiliency.appspot.com",
  messagingSenderId: "835425316027",
  appId: "1:835425316027:web:de4b843d5456bdb9b58d9e",
  measurementId: "G-1D53RDVC6M"
};

const app = firebase.initializeApp(config);
const auth = firebase.auth();
const db = app.firestore();
const functions = firebase.functions();

const authUI = new firebaseui.auth.AuthUI(auth);

const authUIConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        prompt: "select_account"
      }
    }
  ]
};

export default app;
export { auth, authUI, db, authUIConfig, functions };
