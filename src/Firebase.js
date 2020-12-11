import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwk3JG5KtS3gGvIhrpDHHB8JIHcYPWGkU",
  authDomain: "instagram-clone-2a070.firebaseapp.com",
  databaseURL: "https://instagram-clone-2a070.firebaseio.com",
  projectId: "instagram-clone-2a070",
  storageBucket: "instagram-clone-2a070.appspot.com",
  messagingSenderId: "816616037590",
  appId: "1:816616037590:web:7f3c3ccc70be439b8b3d77",
  measurementId: "G-PVD3K39K02"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const storage = firebase.storage()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider, storage}
export default db