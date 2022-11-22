import { LinkCard } from "components";
import React from "react";

import styles from "./AllUserLinks.module.scss";

export const AllUserLinks = () => {
  function addSampleTodo() {
    const sampleTodo = { text: "Sample", done: false };
    // return firebase.push("todos", sampleTodo);
  }

  return (
    <div className={styles.links}>
      <button onClick={addSampleTodo}>Add</button>
      <LinkCard
        longLink={"Długi linnnnnnnnnnnnnnnnnnnnnnnnnnnnk"}
        shortLink={"Krótki link"}
      />
      <LinkCard
        longLink={"Długi linnnnnnnnnnnnnnnnnnnnnnnnnnnnk"}
        shortLink={"Też chcialbym być skopiowany"}
      />
      <LinkCard
        longLink={"Długi linnnnnnnnnnnnnnnnnnnnnnnnnnnnk"}
        shortLink={"Coś nowego "}
      />
    </div>
  );
};
