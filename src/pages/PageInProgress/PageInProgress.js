import React from "react";
import { Attribution, Navbar } from "components";
import { ReactComponent as ImgWork } from "../../assets/images/illustration-working.svg";
import { useNavigate } from "react-router-dom";
import { paths } from "config/paths";

import styles from "./PageInProgress.module.scss";

export const PageInProgress = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(paths.home);
  };

  return (
    <>
      <Navbar />
      <div className={styles.card}>
        <ImgWork className={styles.img} />
        <h1>Comig soon</h1>
        <h2>We are almost ready </h2>
        <button onClick={handleClick} className={styles.button}>
          Go back
        </button>
      </div>
      <Attribution />
    </>
  );
};
