import { database } from "@/firebaseConfig";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";

const files = collection(database, "files");

export const addFiles = (
  imageLink: string,
  imageName: string,
  parentId: string,
  userEmail: string,
  ownerEmail: string
) => {
  try {
    addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
      isFolder: false,
      parentId: parentId,
      userEmail: userEmail,
      sharedTo: ownerEmail ? [ownerEmail] : [],
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

export const shareFiles = async (email: string, currentFileId: string) => {
  try {
    let sharedFileDoc = doc(files, currentFileId);

    let response = await getDoc(sharedFileDoc);

    await updateDoc(sharedFileDoc, {
      sharedTo: [...response.data()?.sharedTo, email],
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchCurrentFolders = async (parentId: string) => {
  try {
    let currentFolder = doc(files, parentId);

    let response = await getDoc(currentFolder);
    return response.data()?.userEmail;
  } catch (err) {
    console.log(err);
  }
};
