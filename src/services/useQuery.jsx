import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";

function useQuery() {

  async function getData(col) {
    const snapshot = await getDocs(collection(db, col));
    const docs = snapshot.docs.map(item => ({ id: item.id, ...item.data() }));
    return docs;
  }

  return { getData }
}

export default useQuery;
