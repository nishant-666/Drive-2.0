import React from "react";
import Topbar from "../Topbar";
import styles from "./Home.module.scss";
import UploadFiles from "../UploadFiles";
import ShowFiles from "../ShowFiles";

export default function HomeComponent() {
  return (
    <div>
      <Topbar />

      <UploadFiles parentId="" />

      <ShowFiles parentId="" />
    </div>
  );
}
