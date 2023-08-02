import React from "react";
import { useRouter } from "next/router";
import UploadFiles from "@/components/UploadFiles";
import ShowFiles from "@/components/ShowFiles";

export default function Folder() {
  const router = useRouter();
  const parentId = router.query.id;

  return (
    <div>
      <UploadFiles parentId={parentId as string} />

      <ShowFiles parentId={parentId as string} />
    </div>
  );
}
