import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

export class User {
  async getMe(uid) {
    try {
      // Comprobar si el usuario existe en la colección 'users'
      let userData;
      const userRef = doc(db, "User", uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        // Si el usuario no existe, crear un nuevo documento con campos vacíos
        await setDoc(userRef, {
          Nombre: "",
          Apellido: "",
          Empresa: "",
          Cargo: "",
          Username: "",
        });
        // Obtener los datos del usuario recién creado
        userData = {
            id:uid,
          Nombre: "",
          Apellido: "",
          Empresa: "",
          Cargo: "",
          Username: "",
        };
      } else {
        // Si el usuario existe, obtener sus datos
        userData = userSnap.data();
      }

      // Devolver los datos del usuario
      return userData;
    } catch (error) {
      throw `Error de firebase : ${error}`;
    }
  }
}
