import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const files = collection(database, "files");

export const addFiles = (
  imageLink: string,
  imageName: string,
  parentId: string,
  userEmail: string
) => {
  try {
    addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
      isFolder: false,
      parentId: parentId,
      userEmail: userEmail,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addFolder = (payload: {}) => {
  try {
    addDoc(files, {
      ...payload,
    });
  } catch (err) {
    console.log(err);
  }
};
