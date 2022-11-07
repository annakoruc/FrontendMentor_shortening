import React from "react";

import styles from "./GetStarted.module.scss";

export const GetStarted = () => {
  return (
    <div className={styles.block}>
      <div>
        <h1 className={styles.title}>Boost your links today</h1>
        <button className={styles.button}>Get Started</button>
      </div>
    </div>
  );
};
