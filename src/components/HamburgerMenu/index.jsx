import React from "react";
import { auth } from "config/fbConfig";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "reduxStore/user";

import styles from "./HamburgerMenu.module.scss";
import { isUserLogged } from "config/auth";

export const HamburgerMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function SignOut() {
    console.log("działa");
    auth
      .signOut()
      .then(
        () => window.localStorage.setItem("userId", JSON.stringify(null)),
        dispatch(userLogin()),
        navigate("/")
      )
      .catch((err) => console.log(err));
  }

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
        {!isUserLogged() ? (
          <>
            <Link className={styles.link} to={`/login`}>
              Login
            </Link>

            <Link className={styles.link} to={`/signup`}>
              Sign Up
            </Link>
          </>
        ) : (
          <button className={styles.link} onClick={() => SignOut()}>
            Sign Out
          </button>
        )}
      </nav>
    </div>
  );
};
