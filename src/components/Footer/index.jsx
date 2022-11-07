import React from "react";

import styles from "./Footer.module.scss";
import { FooterIcons } from "components/FooterIcons";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.title}>Shortly</h1>
      <section>
        <h3>Features</h3>
        <div>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
      </section>
      <section>
        <h3>Resources</h3>
        <div>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
      </section>
      <section>
        <h3>Company</h3>
        <div>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </section>
      <FooterIcons />
    </div>
  );
};
