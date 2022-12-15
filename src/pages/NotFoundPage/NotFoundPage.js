import { Attribution, Navbar } from "components";
import { paths } from "config/paths";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ImgWork } from "../../assets/images/illustration-working.svg";

import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(paths.home);
  };
  return (
    <>
      <Navbar />
      <div className={styles.card}>
        <ImgWork className={styles.img} />
        <h1>404</h1>
        <h2>Not Found Page</h2>
        <p>Something goes wrong. Go back to Home Page</p>
        <button onClick={handleClick} className={styles.button}>
          Go back
        </button>
      </div>
      <Attribution />
    </>
  );
};
