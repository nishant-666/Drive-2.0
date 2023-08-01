import React from "react";
import styles from "./Button.module.scss";

export default function Button({ btnClass, title, onClick }: Button) {
  return (
    <button onClick={onClick} className={`btn ${btnClass} ${styles.commonBtn}`}>
      {title}
    </button>
  );
}
