import { storage, app, database } from "@/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { NextApiRequest, NextApiResponse } from "next";

const addFiles = (req: NextApiRequest, res: NextApiResponse) => {
  // const storageRef = ref(storage, `files/${file.name}`);
  // const uploadTask = uploadBytesResumable(storageRef, file);
  // uploadTask.on(
  //   "state_changed",
  //   (snapshot) => {
  //     const progress = Math.round(
  //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //     );
  //     console.log(progress);
  //   },
  //   (error) => {
  //     alert(error);
  //   },
  //   () => {
  //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //       res.status(201).json(downloadURL);
  //     });
  //   }
  // );
};

export default addFiles;
