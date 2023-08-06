import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UploadFiles from "@/components/UploadFiles";
import ShowFiles from "@/components/ShowFiles";
import Topbar from "@/components/Topbar";
import { useFetchSession } from "@/hooks/useSession";
import { fetchCurrentFolders } from "@/API/Firestore";

export default function Folder() {
  const router = useRouter();
  const [sharedEmails, setSharedEmails] = useState("");
  let { session } = useFetchSession();
  let parentId = router?.query?.id;
  let ownerEmail = router?.query?.owner;

  const fetchFolders = async () => {
    let response = await fetchCurrentFolders(router?.query?.id as string);
    setSharedEmails(response);
  };

  useEffect(() => {
    fetchFolders();
  }, []);
  return (
    <div>
      <Topbar />
      {session ? (
        <>
          <UploadFiles
            parentId={parentId as string}
            ownerEmail={ownerEmail as string}
          />

          <ShowFiles
            parentId={parentId as string}
            ownerEmail={ownerEmail as string}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
