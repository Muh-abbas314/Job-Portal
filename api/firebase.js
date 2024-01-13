
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey:process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: "colabs-d9165.appspot.com",
  messagingSenderId:"4598850459",
  appId:"1:4598850459:web:e8754db3d7c6e70add773e"
};



const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)