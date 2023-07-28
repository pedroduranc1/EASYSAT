import { collection,getDocs,doc,getDoc, query, where, updateDoc, addDoc } from "firebase/firestore";
import { db,storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

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
    const docRefVideo = doc(db,'Modulos',id)
    const docSnapVideo = await getDoc(docRefVideo)

    if(!docSnapVideo.exists()) throw 'Error'

    return docSnapVideo.data()
  }

  async updateCurso(blogId, blogData) {
    try {
      const blogRef = doc(db, "Cursos", blogId);
      await updateDoc(blogRef, blogData);
      return true;
    } catch (error) {
      console.error("Error updating blog: ", error);
      return false;
    }
  }

  async uploadCursoImage(file, uid, slug) {
    // Obtén la extensión del archivo
    const fileExtension = file.name.split(".").pop();

    // Crea el nombre del archivo en Firebase Storage
    const firebaseFileName = `${slug}.${fileExtension}`;

    const fileRef = ref(storage, `${uid}/cursoImages/${firebaseFileName}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    // Espera a que la carga se complete
    await new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Progreso de la carga
        },
        (error) => {
          // Error
          reject(error);
        },
        () => {
          // Completado
          resolve();
        }
      );
    });

    // Obtiene la URL de descarga
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  }

  async createCurso(cursoData) {
    try {
      await addDoc(collection(db, "Cursos"), cursoData);
      return true;
    } catch (error) {
      return false;
    }
  }
}
