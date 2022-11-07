import React from "react";

import styles from "./HomeCard.module.scss";
import { ReactComponent as ImgWork } from "../../assets/images/illustration-working.svg";

export const HomeCard = () => {
  return (
    <div className={styles.card}>
      <ImgWork className={styles.img} />
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <button className={styles.button}>Get Started</button>
    </div>
  );
};
