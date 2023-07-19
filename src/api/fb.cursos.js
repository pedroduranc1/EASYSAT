import { collection,getDocs,doc,getDoc, query, where } from "firebase/firestore";
import { db } from "../utils/firebase";

export class CursosCtrl {
  async getCursos() {
    const dataCollection = collection(db, "Cursos");
    const dataSnapshot = await getDocs(dataCollection);
    const newData = dataSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return newData;
  }

  async getCurso(id){
    const docRef = doc(db,'Cursos',id)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
      return docSnap.data()
    }else{
      return 'Error'
    }
  }

  async getVideosCurso(id){
    const q = query(
      collection(db, "Modulos"),
      where("curso", "==", id)
    );
  
    const querySnapshot = await getDocs(q);
    const blogData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    return blogData
  }

  async getVideo(id){

  }
}
