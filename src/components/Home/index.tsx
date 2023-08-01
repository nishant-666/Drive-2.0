import React from "react";
import Topbar from "../Topbar";
import styles from "./Home.module.scss";
import UploadFiles from "../UploadFiles";

export default function HomeComponent() {
  return (
    <div>
      <Topbar />

      <UploadFiles />
    </div>
  );
}
