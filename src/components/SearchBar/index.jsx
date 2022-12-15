import { shorten } from "config/api";

import React from "react";
import { useState } from "react";
import { store } from "reduxStore";

import styles from "./SearchBar.module.scss";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState();

  const handleClick = () => {
    shorten(inputValue);
  };

  return (
    <div className={styles.block}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
        type="link"
        placeholder="Shorten a link here ..."
      />
      <button onClick={handleClick} className={styles.button}>
        Shorten It!
      </button>
    </div>
  );
};
