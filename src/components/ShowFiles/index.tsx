import React from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";
import { AiFillFolder } from "react-icons/ai";

export default function ShowFiles() {
  let { fileList } = fetchFiles();
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
        }) => {
          return (
            <div>
              <div
                className={`${styles.files} `}
                onClick={() => openFile(file.imageLink)}
              >
                {file.isFolder ? (
                  <>
                    <AiFillFolder size={80} />
                    <p>{file.folderName}</p>
                  </>
                ) : (
                  <>
                    <img className={styles.imageLink} src={file.imageLink} />
                    <p>{file.imageName}</p>
                  </>
                )}

                {/* <img className={styles.imageLink} src={file.imageLink} /> */}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
