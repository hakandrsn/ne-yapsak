import { collection, setDoc,addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const addsDoc = async (path, obj) => {
    try {
        path && await addDoc(collection(db, path), obj)
        return "ekledim"
    } catch (error) {
        return "ekleyemedim"
    }
}