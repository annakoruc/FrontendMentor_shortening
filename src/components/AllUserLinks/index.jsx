import { LinkCard } from "components";
import React from "react";

import styles from "./AllUserLinks.module.scss";

export const AllUserLinks = () => {
  return (
    <div className={styles.links}>
      <LinkCard
        longLink={"Długi linnnnnnnnnnnnnnnnnnnnnnnnnnnnk"}
        shortLink={"Krótki link"}
      />
      <LinkCard
        longLink={"Długi linnnnnnnnnnnnnnnnnnnnnnnnnnnnk"}
        shortLink={"Krótki link"}
      />
      <LinkCard
        longLink={"Długi linnnnnnnnnnnnnnnnnnnnnnnnnnnnk"}
        shortLink={"Krótki link"}
      />
    </div>
  );
};
