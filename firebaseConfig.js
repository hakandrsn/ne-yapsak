import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: 'AIzaSyDlznaJXby1xTsrwyUXN4YzDWsyIjLxR80',
    authDomain: 'ne-yapsak-6c021.firebaseapp.com',
    databaseURL: 'https://ne-yapsak-6c021.firebaseio.com',
    projectId: 'ne-yapsak-6c021',
    storageBucket: 'ne-yapsak-6c021.appspot.com',
    messagingSenderId: '258572616910',
    appId: '1:258572616910:android:1b61748fe3ea42e8493c9f',
    measurementId: 'G-2WGWD8SBXV',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);