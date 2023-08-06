import React, { ChangeEvent, useState } from "react";
import styles from "./Upload.module.scss";
import Button from "../common/Button/Button";
import { fileUpload } from "@/API/FileUpload";
import CommonProgress from "../common/Progress";
import { addFolder } from "@/API/Firestore";
import { useFetchSession } from "@/hooks/useSession";

export default function UploadFiles({ parentId, ownerEmail }: FolderStructure) {
  let { session } = useFetchSession();

  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState("");
  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(
      file,
      setProgress,
      parentId,
      session?.user.email as string,
      ownerEmail
    );
  };

  const uploadFolder = () => {
    let payload = {
      folderName: folderName,
      isFolder: true,
      parentId: parentId || "",
      userEmail: session?.user.email,
      sharedTo: ownerEmail ? [ownerEmail] : [],
    };

    addFolder(payload);
    setFolderName("");
  };
  return (
    <div className={styles.uploadMain}>
      <Button
        onClick={() => {
          setFileVisible(!isFileVisible);
          setFolderVisible(false);
        }}
        title="Add a File"
        btnClass="btn-success"
      />
      {isFileVisible ? (
        <input
          onChange={(event) => uploadFile(event)}
          type="file"
          className="file-input w-full max-w-xs"
        />
      ) : (
        <></>
      )}
      <Button
        onClick={() => {
          setFileVisible(false);
          setFolderVisible(!isFolderVisible);
        }}
        title="Add a Folder"
        btnClass="btn-success"
      />
      {isFolderVisible ? (
        <>
          <input
            type="text"
            placeholder="Type here"
            value={folderName}
            onChange={(event) => setFolderName(event.target.value)}
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <Button
            onClick={uploadFolder}
            title="Create"
            btnClass="btn-success"
          />
        </>
      ) : (
        <></>
      )}
      {progress === 0 || progress === 100 ? (
        <></>
      ) : (
        <CommonProgress progress={progress} />
      )}
    </div>
  );
}
