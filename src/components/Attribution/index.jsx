import React from "react";

import styles from "./Attribution.module.scss";

export const Attribution = () => {
  return (
    <footer className={styles.attribution}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://www.frontendmentor.io/profile/annakoruc">Anna</a>.
    </footer>
  );
};
