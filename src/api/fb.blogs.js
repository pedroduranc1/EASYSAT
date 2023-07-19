import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { storage } from "../utils/firebase";

export class BlogsCtrl {
  async getBlogMDX(blogName){
    const storageRef = ref(storage, `/blogs/${blogName}`);
    const url = await getDownloadURL(storageRef);
    const res = await axios.get(url);
    const mdxText = res.data;
    return mdxText;
  }

  async getBlog(slug) {
    const q = query(
      collection(db, "blogs"),
      where("Slug", "==", slug)
    );
  
    const querySnapshot = await getDocs(q);
    const blogData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });
  
    return blogData[0]
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
}
