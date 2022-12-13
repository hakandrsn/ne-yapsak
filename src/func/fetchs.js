import { collection, getDocs } from "firebase/firestore";
import { ref } from "firebase/storage";
import { db, st } from "../../firebaseConfig";

export const fetchCollection = async (path) => {
    try {
      const response = path && collection(db, path);
      const responceResult = await getDocs(response);
      let a = []
      responceResult.forEach(doc => {
        a.push({ ...doc.data(), key: doc.id })
      })
      return a;
    } catch (error) {
      return false;
    }
  }

export const fetchOne = async (path)=>{
    try {
      const foodRef= await fetchCollection(path)
      const randomOne = Math.floor(Math.random()*ref.length)
      console.log(ref[randomOne])
      return foodRef[randomOne]
    } catch (error) {
        return false
    }
}