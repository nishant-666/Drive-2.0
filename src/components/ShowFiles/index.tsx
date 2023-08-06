import React, { useState } from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";
import { useFetchSession } from "@/hooks/useSession";
import { AiFillFolder } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/router";
import { fetchFolderName } from "@/hooks/fetchFolderName";
import { shareFiles } from "@/API/Firestore";

export default function ShowFiles({ parentId }: FolderStructure) {
  let { session } = useFetchSession();
  let { fileList } = fetchFiles(parentId, session?.user.email as string);
  let { folderName } = fetchFolderName(parentId);
  const [email, setEmail] = useState("");
  const [currentFileId, setCurrentId] = useState("");
  const router = useRouter();
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };

  const getSharedEmails = () => {
    shareFiles(email, currentFileId);
    (window as any).my_modal_1.close();
  };
  return (
    <>
      <div className={styles.parentFolder}>
        <p className={styles.folderName}>{folderName ? folderName : "Root"}</p>
      </div>
      <div className={styles.filesGrid}>
        {fileList.map(
          (file: {
            imageLink: "";
            imageName: "";
            isFolder: false;
            folderName: "";
            id: "";
            sharedTo: [];
            userEmail: "";
          }) => {
            return (
              <div key={file.id}>
                {file.isFolder ? (
                  <div className={`${styles.files}`}>
                    <AiFillFolder
                      size={80}
                      onClick={() =>
                        router.push(
                          `/folder?id=${file.id}&owner=${file.userEmail}`
                        )
                      }
                    />
                    <p>{file.folderName}</p>

                    <div className={styles.dots}>
                      <BsThreeDotsVertical
                        onClick={() => {
                          (window as any).my_modal_1.showModal();
                          setCurrentId(file.id);
                        }}
                        className={styles.icon}
                        size={20}
                      />
                    </div>
                  </div>
                ) : (
                  <div className={`${styles.files} `}>
                    <p>{file.folderName}</p>

                    <img
                      onClick={() => openFile(file.imageLink)}
                      className={styles.imageLink}
                      src={file.imageLink}
                    />
                    <p>{file.imageName}</p>

                    <div className={styles.dots}>
                      <BsThreeDotsVertical
                        onClick={() => {
                          (window as any).my_modal_1.showModal();
                          setCurrentId(file.id);
                        }}
                        className={styles.icon}
                        size={20}
                      />
                    </div>
                  </div>
                )}

                {/* <img className={styles.imageLink} src={file.imageLink} /> */}
              </div>
            );
          }
        )}
      </div>

      <dialog id="my_modal_1" className="modal">
        <section className="modal-box">
          <input
            type="email"
            id="email"
            placeholder="Type here"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <div className="modal-action">
            <button onClick={getSharedEmails} className="btn btn-accent">
              Share
            </button>
            <button
              onClick={() => (window as any).my_modal_1.close()}
              className="btn"
            >
              Close
            </button>
          </div>
        </section>
      </dialog>
    </>
  );
}
