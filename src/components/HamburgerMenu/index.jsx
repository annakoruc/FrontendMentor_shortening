import React from "react";
import { Link } from "react-router-dom";

import styles from "./HamburgerMenu.module.scss";

export const HamburgerMenu = () => {
  return (
    <div className={styles.block}>
      <div className={styles.overlay} />
      <nav className={styles.hamburger_links}>
        <Link className={styles.link} to={`/features`}>
          Features
        </Link>
        <Link className={styles.link} to={`/pricing`}>
          Pricing
        </Link>
        <Link className={styles.link} to={`/resources`}>
          Resources
        </Link>
        <div className={styles.border} />
        <Link className={styles.link} to={`/login`}>
          Login
        </Link>

        <Link className={styles.link} to={`/signup`}>
          Sign Up
        </Link>
      </nav>
    </div>
  );
};
