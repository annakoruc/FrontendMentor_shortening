import React, { useState } from "react";

import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Hamburger from "hamburger-react";
import { HamburgerMenu } from "components/HamburgerMenu";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.navblock}>
      <nav className={styles.navbar}>
        <Logo />
        <Hamburger
          className={styles.hamburger}
          toggled={isOpen}
          toggle={setOpen}
        ></Hamburger>
      </nav>
      {isOpen === true ? <HamburgerMenu /> : ""}
    </div>
  );
};
