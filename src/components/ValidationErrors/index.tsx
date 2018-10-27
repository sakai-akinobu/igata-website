import * as React from "react";

import styles from "./styles.scss";

interface IProps {
  errors: string[];
}

export default function ValidationErrors({errors}: IProps) {
  return (
    <ul className={styles.container}>
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  );
}
