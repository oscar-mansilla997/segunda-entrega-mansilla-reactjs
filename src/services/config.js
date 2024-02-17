
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";


 






const firebaseConfig = {
  apiKey: "AIzaSyBUKPCr0ji3m_BMa8Qfo3--SoKspp5meig",
  authDomain: "tienda-deportiva-c2545.firebaseapp.com",
  projectId: "tienda-deportiva-c2545",
  storageBucket: "tienda-deportiva-c2545.appspot.com",
  messagingSenderId: "193723705345",
  appId: "1:193723705345:web:bcc475df8832cd67133800"
};

// Initialize Firebase



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);