import React from "react";
import Topbar from "../Topbar";
import UploadFiles from "../UploadFiles";
import ShowFiles from "../ShowFiles";
import { useFetchSession } from "@/hooks/useSession";

export default function HomeComponent() {
  let { session } = useFetchSession();
  return (
    <div>
      <Topbar />

      {session?.user ? (
        <>
          <UploadFiles parentId="" />

          <ShowFiles parentId="" />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
