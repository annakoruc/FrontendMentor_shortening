import React from "react";

import styles from "./InfoCard.module.scss";

export const InfoCard = (props) => {
  return (
    <div className={styles.infoblock}>
      <div className={styles.circle}>
        <img className={styles.icons} src={props.icon} alt="icon!" />
      </div>
      <div className={styles.text}>
        <h2>{props.title}</h2>
        <p>{props.children}</p>
      </div>
    </div>
  );
};
