import React from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";
import { AiFillFolder } from "react-icons/ai";
import { useRouter } from "next/router";

export default function ShowFiles({ parentId }) {
  const router = useRouter();
  let { fileList } = fetchFiles(parentId);
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };
  return (
    <div className={styles.filesGrid}>
      {fileList.map(
        (file: {
          imageLink: "";
          imageName: "";
          isFolder: false;
          folderName: "";
          id: "";
        }) => {
          return (
            <div key={file.id}>
              {file.isFolder ? (
                <div
                  onClick={() => router.push(`/Folder?id=${file?.id}`)}
                  className={`${styles.files} `}
                >
                  <div>
                    <AiFillFolder size={80} />
                    <p>{file.folderName}</p>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => openFile(file.imageLink)}
                  className={`${styles.files} `}
                >
                  <div>
                    <img className={styles.imageLink} src={file.imageLink} />
                    <p>{file.imageName}</p>
                  </div>
                </div>
              )}

              {/* <img className={styles.imageLink} src={file.imageLink} /> */}
            </div>
          );
        }
      )}
    </div>
  );
}
