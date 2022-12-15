import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "reduxStore";

import styles from "./AllUserLinks.module.scss";
import { getDataFromFirebase } from "reduxStore/user";
import { LinkCard } from "components";

export const AllUserLinks = () => {
  const [userLinks, setUserLinks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromFirebase()).then(() =>
      setUserLinks(store.getState().user.userLinks)
    );
  }, [dispatch]);

  return (
    <div>
      <div className={styles.links}>
        {userLinks.map((e) => (
          <LinkCard key={e.user} longLink={e.long} shortLink={e.short} />
        ))}
      </div>
    </div>
  );
};
