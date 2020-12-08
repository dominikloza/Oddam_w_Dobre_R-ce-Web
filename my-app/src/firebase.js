import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD2h8SiYuYyex9VfRj6YvgFzjDgyTh0C9Q",
    authDomain: "oddaj-rzeczy-w-dobre-rece.firebaseapp.com",
    projectId: "oddaj-rzeczy-w-dobre-rece",
    storageBucket: "oddaj-rzeczy-w-dobre-rece.appspot.com",
    messagingSenderId: "677916409127",
    appId: "1:677916409127:web:650595dba5e57e7be5fd02",
    measurementId: "G-7GLE42BLF2"
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export default fire;