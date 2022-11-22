import React from "react";

import styles from "./Footer.module.scss";
import { FooterIcons } from "components/FooterIcons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.title}>Shortly</h1>
      <section>
        <h3>Features</h3>
        <div>
          <Link to={"/link-shortening"} className={styles.link}>
            Link Shortening
          </Link>
          <Link to={"/branded-links"} className={styles.link}>
            Branded Links
          </Link>
          <Link to={"/analitycs"} className={styles.link}>
            Analytics
          </Link>
        </div>
      </section>
      <section>
        <h3>Resources</h3>
        <div>
          <Link to={"/blog"} className={styles.link}>
            Blog
          </Link>
          <Link to={"/developers"} className={styles.link}>
            Developers
          </Link>
          <Link to={"/support"} className={styles.link}>
            Support
          </Link>
        </div>
      </section>
      <section>
        <h3>Company</h3>
        <div>
          <Link to={"/about"} className={styles.link}>
            About
          </Link>
          <Link to={"/our-team"} className={styles.link}>
            Our Team
          </Link>
          <Link to={"/carrers"} className={styles.link}>
            Careers
          </Link>
          <Link to={"/contact"} className={styles.link}>
            Contact
          </Link>
        </div>
      </section>
      <FooterIcons />
    </div>
  );
};
