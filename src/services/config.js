import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
//Se utiliza para obtener una instancia del firestore de google y la base de datos en tiempo real. 

//Se usa para reinicia la conexion con firebase. 
import { getAnalytics } from "firebase/analytics";

//Objeto con toda la configuracion de firebase y la conexion con la base de datos.
//Aca se incluye la configuracion de la base de datos y la conexion con la aplicacion.
const firebaseConfig = {
  apiKey: "AIzaSyDGSlHp7OUGG0G0WdoZBBr17uF20PLVcnE",
  authDomain: "pixelarstudiowp.firebaseapp.com",
  projectId: "pixelarstudiowp",
  storageBucket: "pixelarstudiowp.firebasestorage.app",
  messagingSenderId: "103604879814",
  appId: "1:103604879814:web:2464276370a13a71eab2c7",
  measurementId: "G-JNBL799C10"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);