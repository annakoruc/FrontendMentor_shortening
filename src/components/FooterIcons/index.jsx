import React from "react";

import styles from "./FooterIcons.module.scss";
import { ReactComponent as Instagram } from "../../assets/images/icon-instagram.svg";
import { ReactComponent as Facebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as Pinterest } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../../assets/images/icon-twitter.svg";

export const FooterIcons = () => {
  return (
    <div className={styles.icons}>
      <a href="http://facebook.com">
        <Facebook className={styles.icon} />
      </a>
      <a href="http://twitter.com">
        <Twitter className={styles.icon} />
      </a>
      <a href="http://pinterest.com">
        <Pinterest className={styles.icon} />
      </a>
      <a href="http://intagram.com">
        <Instagram className={styles.icon} />
      </a>
    </div>
  );
};
