import React from "react";

import styles from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div className={styles.block}>
      <input
        className={styles.input}
        type="link"
        placeholder="Shorten a link here ..."
      />
      <button className={styles.button}>Shorten It!</button>
    </div>
  );
};
