import firebase from "firebase";

// Initialize Firebase
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
app.firestore().settings({
  timestampsInSnapshots: true
});
export default app.firestore();
