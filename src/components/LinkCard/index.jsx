import React from "react";

import styles from "./LinkCard.module.scss";

export const LinkCard = ({ longLink, shortLink }) => {
  return (
    <div className={styles.card}>
      <p className={styles.long_link}>{longLink}</p>
      <p className={styles.short_link}>{shortLink}</p>
      <button children={"Copy"} className={styles.button} />
    </div>
  );
};
