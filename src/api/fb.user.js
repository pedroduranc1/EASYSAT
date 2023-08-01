import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, storage, auth } from "../utils/firebase";

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
          id: uid,
          Nombre: "",
          Apellido: "",
          Empresa: "",
          Cargo: "",
          Username: "",
        };
      } else {
        // Si el usuario existe, obtener sus datos

        userData = { ...userSnap.data(), uid };
      }

      // Devolver los datos del usuario
      return userData;
    } catch (error) {
      throw `Error de firebase : ${error}`;
    }
  }

  async uploadImage(file, user) {
    // Obtén la extensión del archivo
    const fileExtension = file.name.split(".").pop();

    // Crea el nombre del archivo en Firebase Storage
    const firebaseFileName = `${"img_user"}.${fileExtension}`;

    const fileRef = ref(storage, `${user}/${firebaseFileName}`);
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

  async updateMe(uid, data) {
    const userRef = doc(db, "User", uid);
    await updateDoc(userRef, data);
    return data;
  }

  async getUsersWithRole() {
    const q = query(
      collection(db, "User"),
      where("UserRole", "in", ["Admin", "SubAdmin"])
    );

    const querySnapshot = await getDocs(q);
    const blogData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return blogData;
  }

  async getUsersWithOutRole() {
    const q = query(
      collection(db, "User")
    );

    const querySnapshot = await getDocs(q);
    const blogData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return blogData;
  }

  async createUser(userData) {
    try {
      const { email, password } = userData;
      //crea el email y password en firebase auth
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const {uid} = userCredentials.user;

      let UserCollectionData = {
        Nombre: userData.Nombre,
        Apellido: userData.Apellido,
        Cargo: userData.Cargo,
        Empresa: userData.Empresa,
        Img_url: "",
        uid: uid,
        Username: userData.Username,
        UserPlan: userData.UserPlan,
        UserRole: userData.UserRole,
      };

      const userDocRef = doc(db, "User", uid);

      await setDoc(userDocRef, UserCollectionData);
      return true;
    } catch (error) {
      return error.message;
    }
  }

}
