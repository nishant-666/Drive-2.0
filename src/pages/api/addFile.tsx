import { storage, app, database } from "@/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { NextApiRequest, NextApiResponse } from "next";

const addFiles = (req: NextApiRequest, res: NextApiResponse) => {};

export default addFiles;
