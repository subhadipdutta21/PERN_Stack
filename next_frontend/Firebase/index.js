import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAcq1oxRmSH3ykkh9dmmLV83CTKYMDOmN8",
  authDomain: "pern-296616.firebaseapp.com",
  projectId: "pern-296616",
  storageBucket: "pern-296616.appspot.com",
  messagingSenderId: "262293425024",
  appId: "1:262293425024:web:d79fc425222b1a931d0f65",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const storage = firebase.storage();

export { storage, firebase as default };
