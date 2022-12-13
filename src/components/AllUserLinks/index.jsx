import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "reduxStore";

import styles from "./AllUserLinks.module.scss";
import { getDataFromFirebase } from "reduxStore/links";
import { LinkCard } from "components";

export const AllUserLinks = () => {
  const [userLinks, setUserLinks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromFirebase()).then(() =>
      setUserLinks(store.getState().links.data)
    );
  }, [dispatch]);

  return (
    <div>
      <h1>Links</h1>
      <div className={styles.links}>
        {userLinks.map((e) => (
          <LinkCard longLink={e.long} shortLink={e.short} />
        ))}
      </div>
    </div>
  );
};
