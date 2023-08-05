import { onSnapshot, collection } from "firebase/firestore";
import { database } from "@/firebaseConfig";
import { useEffect, useState } from "react";

let files = collection(database, "files");

export const fetchFiles = (parentId: string, userEmail: string) => {
  const [fileList, setFileList] = useState<ArrayType>([]);

  const getFolders = () => {
    if (userEmail) {
      if (!parentId) {
        onSnapshot(files, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter(
                (item: any) =>
                  item.parentId === "" &&
                  (item.sharedTo?.includes(userEmail) ||
                    item.userEmail === userEmail)
              )
          );
        });
      } else {
        onSnapshot(files, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter(
                (item: any) =>
                  item.parentId === parentId &&
                  (item.sharedTo?.includes(userEmail) ||
                    item.userEmail === userEmail)
              )
          );
        });
      }
    }
  };
  useEffect(() => {
    getFolders();
  }, [parentId, userEmail]);

  return { fileList };
};
