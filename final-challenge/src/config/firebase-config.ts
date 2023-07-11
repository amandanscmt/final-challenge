import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  firebaseConfig: {
    apiKey: "AIzaSyCrmXXdZL9PZ2-wsV5gBpUu_pNq24U1TCQ",
    authDomain: "final-challenge-audio.firebaseapp.com",
    projectId: "final-challenge-audio",
    storageBucket: "final-challenge-audio.appspot.com",
    messagingSenderId: "675761277491",
    appId: "1:675761277491:web:ec255406a7d702a429f146",
    measurementId: "G-BGE0KFFCE6",
  },
};

const app = initializeApp(config.firebaseConfig);
export const auth = getAuth(app);
