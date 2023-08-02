import { onSnapshot, collection, doc } from "firebase/firestore";
import { database } from "@/firebaseConfig";
import { useEffect, useState } from "react";

let files = collection(database, "files");

export const fetchFiles = (parentId: string) => {
  const [fileList, setFileList] = useState<ArrayType>([]);
  const fetchFileList = () => {
    if (!parentId) {
      onSnapshot(files, (response) => {
        setFileList(
          response.docs
            .map((item) => {
              return { ...item.data(), id: item.id };
            })
            .filter((item: any) => item.parentId === "")
        );
      });
    } else {
      onSnapshot(files, (response) => {
        setFileList(
          response.docs
            .map((item) => {
              return { ...item.data(), id: item.id };
            })
            .filter((item: any) => item.parentId === parentId)
        );
      });
    }
  };
  useEffect(() => {
    fetchFileList();
  }, [parentId]);

  return { fileList };
};
