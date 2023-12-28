import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDrtJHIxv2oxVsdr67VCiFKP1IrofYRRvU",
  authDomain: "fir-storage-pedro.firebaseapp.com",
  projectId: "fir-storage-pedro",
  storageBucket: "fir-storage-pedro.appspot.com",
  messagingSenderId: "939691610040",
  appId: "1:939691610040:web:25e5e585f56332e51a094d"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);