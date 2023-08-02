import { onSnapshot, collection, doc } from "firebase/firestore";
import { database } from "@/firebaseConfig";
import { useEffect, useState } from "react";

let files = collection(database, "files");

export const fetchFolderName = (parentId: string) => {
  const [folderName, setFolderName] = useState("");

  const getFolderName = () => {
    if (parentId) {
      let folderDoc = doc(files, parentId);
      onSnapshot(folderDoc, (response) => {
        setFolderName(response.data()?.folderName);
      });
    }
  };
  useEffect(() => {
    getFolderName();
  }, [parentId]);

  return { folderName };
};
