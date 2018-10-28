import * as React from "react";

import styles from "./styles.scss";

interface IProps {
  errors: string[];
}

export default function ValidationErrors({errors}: IProps) {
  return (
    errors.length ? (
      <div className={styles.container}>
        <h4 className={styles.title}>Errors</h4>
        <ul className={styles.errors}>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    ) : null
  );
}
