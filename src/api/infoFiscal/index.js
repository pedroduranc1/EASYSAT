import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

export class InfoFiscal {
    async getInfoFiscal(id) {
        const docRef = doc(db, "InfoFiscalUser", id);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          return false;
        }
      }
}