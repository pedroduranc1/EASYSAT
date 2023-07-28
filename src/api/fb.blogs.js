import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

import { db } from "../utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { storage } from "../utils/firebase";

export class BlogsCtrl {
  async getBlogMDX(blogName) {
    const res = await axios.get(blogName);
    const mdxText = res.data;
    return mdxText;
  }

  async getBlog(slug) {
    const q = query(collection(db, "blogs"), where("Slug", "==", slug));

    const querySnapshot = await getDocs(q);
    const blogData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return blogData[0];
  }

  async getBlogs() {
    const dataCollection = collection(db, "blogs");
    const dataSnapshot = await getDocs(dataCollection);
    const newData = dataSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return newData;
  }

  async createBlog(blogData) {
    try {
      await addDoc(collection(db, "blogs"), blogData);
      return true;
    } catch (error) {
      return false;
    }
  }

  async uploadBlogImage(file, uid, slug) {
    // Obtén la extensión del archivo
    const fileExtension = file.name.split(".").pop();

    // Crea el nombre del archivo en Firebase Storage
    const firebaseFileName = `${slug}.${fileExtension}`;

    const fileRef = ref(storage, `${uid}/blogImages/${firebaseFileName}`);
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

  async uploadBlogMD(file, uid, slug) {
    // Obtén la extensión del archivo
    const fileExtension = file.name.split(".").pop();

    // Crea el nombre del archivo en Firebase Storage
    const firebaseFileName = `${slug}.${fileExtension}`;

    const fileRef = ref(storage, `${uid}/blogs/${firebaseFileName}`);
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

  async updateBlog(blogId, blogData) {
    try {
      const blogRef = doc(db, "blogs", blogId);
      await updateDoc(blogRef, blogData);
      return true;
    } catch (error) {
      console.error("Error updating blog: ", error);
      return false;
    }
  }
}
